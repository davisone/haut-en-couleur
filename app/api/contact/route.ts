import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit } from '@/app/lib/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY);

// Schéma de validation avec Zod
const contactSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  telephone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide'),
  sujet: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  captchaToken: z.string().min(1, 'Le CAPTCHA est requis'),
});

// Fonction pour vérifier le token hCaptcha
async function verifyCaptcha(token: string): Promise<boolean> {
  const verifyUrl = 'https://hcaptcha.com/siteverify';

  const response = await fetch(verifyUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `response=${token}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
  });

  const data = await response.json();
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    // Extraire l'IP du client pour le rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Vérifier le rate limiting
    const rateLimitResult = await checkRateLimit(ip);

    if (!rateLimitResult.success) {
      const resetDate = new Date(rateLimitResult.reset);
      const minutesUntilReset = Math.ceil((rateLimitResult.reset - Date.now()) / 1000 / 60);

      return NextResponse.json(
        {
          error: `Trop de tentatives. Veuillez réessayer dans ${minutesUntilReset} minute${minutesUntilReset > 1 ? 's' : ''}.`,
          retryAfter: resetDate.toISOString()
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          }
        }
      );
    }

    const body = await request.json();

    // Validation des données
    const validatedData = contactSchema.parse(body);

    // Vérifier le CAPTCHA
    const isCaptchaValid = await verifyCaptcha(validatedData.captchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { error: 'Échec de la vérification CAPTCHA. Veuillez réessayer.' },
        { status: 400 }
      );
    }

    // Mapping des sujets
    const sujetLabels: Record<string, string> = {
      devis: 'Demande de devis',
      interieur: 'Peinture intérieure',
      exterieur: 'Peinture extérieure',
      ravalement: 'Ravalement de façade',
      enduits: 'Enduits décoratifs',
      urgence: 'Dépannage d\'urgence',
      autre: 'Autre',
    };

    // Envoi de 2 emails en parallèle : un à l'entreprise, un de confirmation au client
    const [emailToCompany, emailToClient] = await Promise.all([
      // Email 1 : Notification à l'entreprise
      resend.emails.send({
        from: 'Haut en Couleur <contact@haut-en-couleur.fr>',
        to: ['contact@haut-en-couleur.fr'], // Email professionnel (redirigé par OVH vers sandrinedavison@hotmail.fr)
        replyTo: validatedData.email,
        subject: `[Site Web] ${sujetLabels[validatedData.sujet] || validatedData.sujet}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background-color: #f97316;
                  color: white;
                  padding: 20px;
                  text-align: center;
                  border-radius: 8px 8px 0 0;
                }
                .content {
                  background-color: #f9fafb;
                  padding: 30px;
                  border-radius: 0 0 8px 8px;
                }
                .field {
                  margin-bottom: 20px;
                  padding: 15px;
                  background-color: white;
                  border-radius: 6px;
                  border-left: 4px solid #f97316;
                }
                .label {
                  font-weight: bold;
                  color: #f97316;
                  margin-bottom: 5px;
                }
                .value {
                  color: #333;
                }
                .footer {
                  margin-top: 20px;
                  padding-top: 20px;
                  border-top: 1px solid #e5e7eb;
                  font-size: 12px;
                  color: #6b7280;
                  text-align: center;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">Nouveau message depuis le site web</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Sujet :</div>
                    <div class="value">${sujetLabels[validatedData.sujet] || validatedData.sujet}</div>
                  </div>

                  <div class="field">
                    <div class="label">Nom :</div>
                    <div class="value">${validatedData.nom}</div>
                  </div>

                  <div class="field">
                    <div class="label">Email :</div>
                    <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                  </div>

                  <div class="field">
                    <div class="label">Téléphone :</div>
                    <div class="value"><a href="tel:${validatedData.telephone.replace(/\s/g, '')}">${validatedData.telephone}</a></div>
                  </div>

                  <div class="field">
                    <div class="label">Message :</div>
                    <div class="value" style="white-space: pre-wrap;">${validatedData.message}</div>
                  </div>

                  <div class="footer">
                    Ce message a été envoyé depuis le formulaire de contact de votre site web Haut en Couleur.
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),

      // Email 2 : Confirmation au client
      resend.emails.send({
        from: 'Haut en Couleur <contact@haut-en-couleur.fr>',
        to: [validatedData.email],
        subject: 'Confirmation de votre demande - Haut en Couleur',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background-color: #f97316;
                  color: white;
                  padding: 20px;
                  text-align: center;
                  border-radius: 8px 8px 0 0;
                }
                .content {
                  background-color: #f9fafb;
                  padding: 30px;
                  border-radius: 0 0 8px 8px;
                }
                .message-box {
                  background-color: white;
                  padding: 20px;
                  border-radius: 6px;
                  margin: 20px 0;
                  border-left: 4px solid #f97316;
                }
                .info-box {
                  background-color: #fef3c7;
                  padding: 15px;
                  border-radius: 6px;
                  margin: 20px 0;
                  border-left: 4px solid #f59e0b;
                }
                .field {
                  margin-bottom: 15px;
                }
                .label {
                  font-weight: bold;
                  color: #f97316;
                  font-size: 14px;
                }
                .value {
                  color: #333;
                  margin-top: 5px;
                }
                .footer {
                  margin-top: 20px;
                  padding-top: 20px;
                  border-top: 1px solid #e5e7eb;
                  font-size: 12px;
                  color: #6b7280;
                  text-align: center;
                }
                .contact-info {
                  text-align: center;
                  margin-top: 20px;
                  font-size: 14px;
                }
                .contact-info a {
                  color: #f97316;
                  text-decoration: none;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">Merci pour votre demande !</h1>
                </div>
                <div class="content">
                  <p style="font-size: 16px; color: #374151;">
                    Bonjour <strong>${validatedData.nom}</strong>,
                  </p>

                  <p style="color: #374151;">
                    Nous avons bien reçu votre demande concernant <strong>${sujetLabels[validatedData.sujet] || validatedData.sujet}</strong>.
                    Notre équipe vous répondra dans les plus brefs délais.
                  </p>

                  <div class="info-box">
                    <p style="margin: 0; font-size: 14px;">
                      <strong>⏱️ Délai de réponse :</strong> Nous nous engageons à vous répondre sous 24 à 48 heures ouvrées.
                    </p>
                  </div>

                  <h2 style="color: #f97316; font-size: 18px; margin-top: 30px;">Récapitulatif de votre demande</h2>

                  <div class="message-box">
                    <div class="field">
                      <div class="label">Sujet :</div>
                      <div class="value">${sujetLabels[validatedData.sujet] || validatedData.sujet}</div>
                    </div>

                    <div class="field">
                      <div class="label">Nom :</div>
                      <div class="value">${validatedData.nom}</div>
                    </div>

                    <div class="field">
                      <div class="label">Email :</div>
                      <div class="value">${validatedData.email}</div>
                    </div>

                    <div class="field">
                      <div class="label">Téléphone :</div>
                      <div class="value">${validatedData.telephone}</div>
                    </div>

                    <div class="field">
                      <div class="label">Votre message :</div>
                      <div class="value" style="white-space: pre-wrap; font-style: italic; color: #6b7280;">${validatedData.message}</div>
                    </div>
                  </div>

                  <p style="color: #374151; margin-top: 20px;">
                    Si vous avez des questions urgentes, n'hésitez pas à nous contacter directement.
                  </p>

                  <div class="contact-info">
                    <p style="margin: 5px 0;">
                      📞 <strong>Téléphone :</strong> <a href="tel:0666284458">06 66 28 44 58</a>
                    </p>
                    <p style="margin: 5px 0;">
                      ✉️ <strong>Email :</strong> <a href="mailto:contact@haut-en-couleur.fr">contact@haut-en-couleur.fr</a>
                    </p>
                    <p style="margin: 5px 0;">
                      🌐 <strong>Site web :</strong> <a href="https://haut-en-couleur.fr">haut-en-couleur.fr</a>
                    </p>
                  </div>

                  <div class="footer">
                    <p style="margin: 5px 0;">Haut en Couleur - Peinture et ravalement</p>
                    <p style="margin: 5px 0;">Mordelles, 35310</p>
                    <p style="margin: 5px 0; color: #9ca3af;">
                      Ceci est un email automatique, merci de ne pas y répondre directement.
                    </p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      })
    ]);

    // Vérifier les erreurs
    if (emailToCompany.error) {
      console.error('Erreur envoi email entreprise:', emailToCompany.error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email à l\'entreprise' },
        { status: 500 }
      );
    }

    if (emailToClient.error) {
      console.error('Erreur envoi email confirmation client:', emailToClient.error);
      // On continue quand même car l'email principal à l'entreprise est passé
      // Mais on log l'erreur pour investigation
    }

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès', data: emailToCompany.data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur API contact:', error);

    // Gestion des erreurs de validation Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Données invalides',
          details: error.issues.map(e => ({ field: e.path.join('.'), message: e.message }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    );
  }
}

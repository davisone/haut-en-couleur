import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Schéma de validation avec Zod
const contactSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  telephone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide'),
  sujet: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation des données
    const validatedData = contactSchema.parse(body);

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

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'Haut en Couleur <onboarding@resend.dev>', // Adresse par défaut Resend pour les tests
      to: ['evandavison@outlook.fr'], // Email temporaire pour les tests (changer après vérification du domaine)
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
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur API contact:', error);

    // Gestion des erreurs de validation Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Données invalides',
          details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
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

import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export const metadata: Metadata = {
  title: "Mentions légales - Haut en Couleur",
  description: "Mentions légales du site Haut en Couleur, entreprise de peinture à Mordelles.",
};

export default function MentionsLegales() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Mentions légales"
          subtitle="Informations légales concernant le site Haut en Couleur"
          backgroundImage="/img/default-hero.jpg"
        />

        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto prose prose-lg">

            {/* Éditeur du site */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">1. Éditeur du site</h2>
              <p className="text-gray-600 mb-2">
                <strong>Raison sociale :</strong> Haut en Couleur
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Forme juridique :</strong> [À compléter - Ex: Auto-entrepreneur, SARL, SAS, etc.]
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Adresse :</strong> Mordelles, Ille-et-Vilaine, France
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Téléphone :</strong> 06 66 28 44 58
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email :</strong> sandrinedavison@hotmail.fr
              </p>
              <p className="text-gray-600 mb-2">
                <strong>SIRET :</strong> [À compléter]
              </p>
              <p className="text-gray-600 mb-2">
                <strong>TVA intracommunautaire :</strong> [À compléter si applicable]
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Responsable de publication :</strong> [Nom du gérant]
              </p>
            </div>

            {/* Hébergeur */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">2. Hébergeur du site</h2>
              <p className="text-gray-600 mb-2">
                <strong>Nom :</strong> [À compléter - Ex: Vercel, OVH, etc.]
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Adresse :</strong> [À compléter]
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Téléphone :</strong> [À compléter]
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-600 mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de Haut en Couleur, sauf mention contraire.
              </p>
              <p className="text-gray-600 mb-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit préalable de Haut en Couleur.
              </p>
              <p className="text-gray-600">
                Les marques et logos présents sur le site sont déposés par Haut en Couleur ou par des tiers. Toute utilisation de ces marques sans autorisation est interdite.
              </p>
            </div>

            {/* Protection des données */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">4. Protection des données personnelles</h2>
              <p className="text-gray-600 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-600 mb-4">
                Pour exercer ces droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Par email : sandrinedavison@hotmail.fr</li>
                <li>Par téléphone : 06 66 28 44 58</li>
                <li>Par courrier : Haut en Couleur, Mordelles, Ille-et-Vilaine, France</li>
              </ul>
              <p className="text-gray-600">
                Pour plus d'informations sur la gestion de vos données personnelles, consultez notre{' '}
                <a href="/politique-confidentialite" className="text-primary hover:underline">
                  Politique de confidentialité
                </a>.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">5. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic.
              </p>
              <p className="text-gray-600">
                Vous pouvez paramétrer vos préférences concernant les cookies depuis votre navigateur. Pour en savoir plus, consultez notre{' '}
                <a href="/politique-confidentialite" className="text-primary hover:underline">
                  Politique de confidentialité
                </a>.
              </p>
            </div>

            {/* Limitation de responsabilité */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">6. Limitation de responsabilité</h2>
              <p className="text-gray-600 mb-4">
                Haut en Couleur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-gray-600 mb-4">
                En conséquence, nous déclinons toute responsabilité :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site</li>
                <li>Pour tous dommages directs ou indirects résultant de l'utilisation du site</li>
              </ul>
            </div>

            {/* Droit applicable */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">7. Droit applicable et juridiction compétente</h2>
              <p className="text-gray-600 mb-4">
                Les présentes mentions légales sont régies par le droit français.
              </p>
              <p className="text-gray-600">
                En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Des questions ?</h2>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant ces mentions légales, n'hésitez pas à nous contacter :
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Email :</strong>{' '}
                  <a href="mailto:sandrinedavison@hotmail.fr" className="text-primary hover:underline">
                    sandrinedavison@hotmail.fr
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>Téléphone :</strong>{' '}
                  <a href="tel:+33666284458" className="text-primary hover:underline">
                    06 66 28 44 58
                  </a>
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
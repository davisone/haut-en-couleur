import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export const metadata: Metadata = {
  title: "Politique de confidentialité - Haut en Couleur",
  description: "Politique de confidentialité et protection des données personnelles de Haut en Couleur.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Politique de confidentialité"
          subtitle="Comment nous protégeons et utilisons vos données personnelles"
          backgroundImage="/img/default-hero.jpg"
        />

        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto prose prose-lg">

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-600 mb-4">
                Chez Haut en Couleur, nous accordons une grande importance à la protection de votre vie privée et de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
              <p className="text-gray-600">
                En utilisant notre site web, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </div>

            {/* Responsable du traitement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">1. Responsable du traitement des données</h2>
              <p className="text-gray-600 mb-2">
                <strong>Raison sociale :</strong> Haut en Couleur
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Adresse :</strong> Mordelles, Ille-et-Vilaine, France
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email :</strong> contact@haut-en-couleur.fr
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Téléphone :</strong> 06 66 28 44 58
              </p>
            </div>

            {/* Données collectées */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">2. Données personnelles collectées</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">2.1. Données collectées directement</h3>
              <p className="text-gray-600 mb-4">
                Lorsque vous utilisez notre formulaire de contact ou nous contactez par email, nous collectons les informations suivantes :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Sujet de votre demande</li>
                <li>Message et contenu de votre demande</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">2.2. Données collectées automatiquement</h3>
              <p className="text-gray-600 mb-4">
                Lors de votre navigation sur notre site, nous pouvons collecter automatiquement :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Votre adresse IP</li>
                <li>Type de navigateur et système d'exploitation</li>
                <li>Pages visitées et durée de visite</li>
                <li>Source de référence (comment vous êtes arrivé sur notre site)</li>
                <li>Date et heure de visite</li>
              </ul>
            </div>

            {/* Finalités */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">3. Finalités du traitement</h2>
              <p className="text-gray-600 mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Traitement de vos demandes :</strong> Répondre à vos questions, demandes de devis et demandes d'information</li>
                <li><strong>Gestion de la relation client :</strong> Suivi de votre projet, communication sur l'avancement des travaux</li>
                <li><strong>Amélioration du site :</strong> Analyser l'utilisation du site pour améliorer nos services</li>
                <li><strong>Obligations légales :</strong> Respecter nos obligations légales et réglementaires</li>
                <li><strong>Marketing (avec votre consentement) :</strong> Vous envoyer des informations sur nos services, promotions et actualités</li>
              </ul>
            </div>

            {/* Base légale */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">4. Base légale du traitement</h2>
              <p className="text-gray-600 mb-4">
                Le traitement de vos données personnelles est fondé sur :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Votre consentement :</strong> Pour l'envoi de communications marketing</li>
                <li><strong>L'exécution d'un contrat :</strong> Pour le traitement de votre demande de devis ou la réalisation de travaux</li>
                <li><strong>L'intérêt légitime :</strong> Pour l'amélioration de nos services et la sécurité du site</li>
                <li><strong>Les obligations légales :</strong> Pour respecter nos obligations comptables et fiscales</li>
              </ul>
            </div>

            {/* Destinataires */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">5. Destinataires des données</h2>
              <p className="text-gray-600 mb-4">
                Vos données personnelles sont destinées aux services internes de Haut en Couleur.
              </p>
              <p className="text-gray-600 mb-4">
                Nous pouvons également partager vos données avec :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Nos prestataires techniques (hébergement, maintenance du site)</li>
                <li>Nos partenaires pour la réalisation de certains travaux (sous-traitants)</li>
                <li>Les autorités compétentes en cas d'obligation légale</li>
              </ul>
              <p className="text-gray-600">
                Nous veillons à ce que ces tiers respectent la confidentialité et la sécurité de vos données personnelles.
              </p>
            </div>

            {/* Durée de conservation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">6. Durée de conservation</h2>
              <p className="text-gray-600 mb-4">
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Demandes de contact :</strong> 3 ans après le dernier contact</li>
                <li><strong>Clients :</strong> 10 ans pour les obligations comptables et fiscales</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                <li><strong>Newsletter (si applicable) :</strong> Jusqu'à votre désinscription</li>
              </ul>
              <p className="text-gray-600">
                À l'issue de ces durées, vos données sont supprimées ou anonymisées.
              </p>
            </div>

            {/* Vos droits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">7. Vos droits</h2>
              <p className="text-gray-600 mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Droit d'accès :</strong> Obtenir la confirmation que vos données sont traitées et accéder à ces données</li>
                <li><strong>Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données dans certaines conditions</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données dans certains cas</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré et les transmettre à un autre responsable</li>
                <li><strong>Droit de retirer votre consentement :</strong> À tout moment, sans affecter la licéité du traitement fondé sur le consentement effectué avant le retrait</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Comment exercer vos droits</h3>
              <p className="text-gray-600 mb-4">
                Pour exercer vos droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Par email : contact@haut-en-couleur.fr</li>
                <li>Par téléphone : 06 66 28 44 58</li>
                <li>Par courrier : Haut en Couleur, Mordelles, Ille-et-Vilaine, France</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Nous nous engageons à répondre à votre demande dans un délai d'un mois.
              </p>
              <p className="text-gray-600">
                Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">8. Cookies et technologies similaires</h2>
              <p className="text-gray-600 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">8.1. Qu'est-ce qu'un cookie ?</h3>
              <p className="text-gray-600 mb-6">
                Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site. Il permet de vous reconnaître lors de vos prochaines visites.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">8.2. Types de cookies utilisés</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (ne peuvent pas être désactivés)</li>
                <li><strong>Cookies analytiques :</strong> Nous aident à comprendre comment les visiteurs utilisent notre site</li>
                <li><strong>Cookies de préférence :</strong> Permettent de mémoriser vos choix (langue, région)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">8.3. Gestion des cookies</h3>
              <p className="text-gray-600 mb-4">
                Vous pouvez gérer vos préférences en matière de cookies directement depuis votre navigateur :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Chrome : Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                <li>Firefox : Menu &gt; Options &gt; Vie privée et sécurité &gt; Cookies</li>
                <li>Safari : Préférences &gt; Confidentialité &gt; Cookies</li>
                <li>Edge : Menu &gt; Paramètres &gt; Confidentialité &gt; Cookies</li>
              </ul>
            </div>

            {/* Sécurité */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">9. Sécurité des données</h2>
              <p className="text-gray-600 mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction accidentelle ou illicite, la perte, l'altération, la divulgation ou l'accès non autorisé.
              </p>
              <p className="text-gray-600 mb-4">
                Ces mesures incluent :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières</li>
                <li>Mises à jour de sécurité régulières</li>
              </ul>
            </div>

            {/* Transferts internationaux */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">10. Transferts de données hors UE</h2>
              <p className="text-gray-600">
                Vos données personnelles sont hébergées et traitées au sein de l'Union Européenne. Si nous devions transférer vos données en dehors de l'UE, nous nous assurerions que des garanties appropriées sont mises en place conformément au RGPD.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">11. Modifications de la politique</h2>
              <p className="text-gray-600 mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
              <p className="text-gray-600">
                Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Des questions sur vos données ?</h2>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous :
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Email :</strong>{' '}
                  <a href="mailto:contact@haut-en-couleur.fr" className="text-primary hover:underline">
                    contact@haut-en-couleur.fr
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
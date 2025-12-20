import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Cookies - Haut en Couleur',
  description: 'Politique d\'utilisation des cookies du site Haut en Couleur. Informations sur les cookies utilisés et vos droits.',
  robots: 'index, follow',
};

export default function CookiesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Politique de Cookies"
          subtitle="Informations sur l'utilisation des cookies sur notre site"
          backgroundImage="/img/cookies-hero.jpg"
        />

        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Qu'est-ce qu'un cookie ?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone
                  lors de la visite d'un site internet. Les cookies permettent au site de reconnaître votre
                  appareil et de mémoriser certaines informations vous concernant, afin de faciliter votre
                  navigation et de vous proposer une expérience personnalisée.
                </p>
              </div>

              {/* Types de cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Les cookies que nous utilisons
                </h2>

                <div className="space-y-6">
                  {/* Cookies essentiels */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      1. Cookies essentiels (obligatoires)
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li><strong>cookie_consent</strong> : Enregistre votre choix concernant les cookies (durée : 1 an)</li>
                      <li><strong>session</strong> : Maintient votre session de navigation (durée : session)</li>
                    </ul>
                  </div>

                  {/* Cookies de sécurité */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      2. Cookies de sécurité
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Ces cookies nous aident à protéger notre site contre les activités malveillantes.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li><strong>hCaptcha</strong> : Protection anti-spam sur le formulaire de contact (durée : session)</li>
                    </ul>
                  </div>

                  {/* Cookies analytiques (optionnels) */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      3. Cookies analytiques (optionnels)
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Ces cookies nous permettent de comprendre comment vous utilisez notre site afin de l'améliorer.
                      Vous pouvez les refuser sans que cela n'affecte votre navigation.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li><strong>Google Analytics</strong> : Analyse statistique de la fréquentation (durée : 2 ans)</li>
                      <li><strong>_ga, _gid</strong> : Mesure d'audience et statistiques de visite</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gestion des cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Comment gérer vos cookies ?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vous pouvez à tout moment choisir de désactiver ces cookies. Votre navigateur peut également
                  être paramétré pour vous signaler les cookies qui sont déposés dans votre ordinateur et vous
                  demander de les accepter ou non.
                </p>

                <div className="bg-orange-50 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Paramétrage de votre navigateur
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Chrome</strong> : Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                    <li><strong>Firefox</strong> : Menu &gt; Options &gt; Vie privée et sécurité &gt; Cookies</li>
                    <li><strong>Safari</strong> : Préférences &gt; Confidentialité &gt; Cookies et données de sites web</li>
                    <li><strong>Edge</strong> : Paramètres &gt; Confidentialité &gt; Cookies et autorisations de site</li>
                  </ul>
                </div>
              </div>

              {/* Durée de conservation */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Durée de conservation
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Les cookies sont conservés pour une durée maximale de 13 mois à compter de leur premier dépôt
                  dans votre terminal. À l'issue de cette période, votre consentement sera à nouveau requis.
                </p>
              </div>

              {/* Vos droits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Vos droits
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
                  et Libertés, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit d'opposition au traitement de vos données</li>
                  <li>Droit à la portabilité de vos données</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Nous contacter
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pour toute question concernant notre politique de cookies ou pour exercer vos droits,
                  vous pouvez nous contacter :
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email :</strong> <a href="mailto:contact@haut-en-couleur.fr" className="text-primary hover:underline">contact@haut-en-couleur.fr</a></p>
                  <p><strong>Téléphone :</strong> <a href="tel:+33666284458" className="text-primary hover:underline">06 66 28 44 58</a></p>
                  <p><strong>Adresse :</strong> Mordelles, Ille-et-Vilaine, France</p>
                </div>
              </div>

              {/* Dernière mise à jour */}
              <div className="text-sm text-gray-500 italic border-t border-gray-200 pt-6">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
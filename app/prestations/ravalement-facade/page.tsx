import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import Link from 'next/link';

export const metadata = {
  title: "Ravalement de façade - Haut en Couleur",
  description: "Ravalement de façade à Rennes : nettoyage, réparation, enduit et peinture. Redonnez vie à votre bâtiment.",
};

export default function RavalementFacade() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Ravalement de façade"
          subtitle="Rénovation complète de vos façades pour redonner éclat et protection à votre bâtiment"
          backgroundImage="/img/ravalement-facade-hero.jpg"
        />

        {/* Introduction */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Qu'est-ce qu'un ravalement de façade ?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Le ravalement de façade est une opération complète de rénovation qui vise à nettoyer, réparer et embellir les murs extérieurs de votre bâtiment. Au-delà de l'aspect esthétique, c'est un investissement essentiel pour la protection et la valorisation de votre patrimoine.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Un ravalement bien réalisé améliore l'isolation thermique, protège contre l'humidité et peut augmenter la valeur de votre bien immobilier de 10 à 15%.
            </p>
          </div>
        </section>

        {/* Étapes du ravalement */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Les étapes d'un ravalement complet
            </h2>

            <div className="space-y-8">
              {/* Étape 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Diagnostic et préparation</h3>
                    <p className="text-gray-600 mb-4">
                      Inspection complète de la façade pour identifier les problèmes (fissures, infiltrations, dégradations).
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Étude approfondie de l'état de la façade
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Installation de l'échafaudage sécurisé
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Protection des ouvertures et du sol
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Nettoyage de la façade</h3>
                    <p className="text-gray-600 mb-4">
                      Nettoyage en profondeur pour éliminer salissures, mousses, algues et pollution.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Nettoyage haute pression adapté
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Traitement anti-mousse et anti-pollution
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Décapage de l'ancienne peinture si nécessaire
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Réparation des défauts</h3>
                    <p className="text-gray-600 mb-4">
                      Traitement de toutes les imperfections pour une façade saine et durable.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Rebouchage des fissures et trous
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Remplacement des joints dégradés
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Traitement des infiltrations d'eau
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Étape 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Application de l'enduit</h3>
                    <p className="text-gray-600 mb-4">
                      Pose d'un enduit de qualité pour uniformiser et protéger la façade.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Choix de l'enduit adapté (traditionnel, monocouche, hydraulique)
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Application en plusieurs couches
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Choix de la finition (grattée, lissée, talochée)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Étape 5 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Finition et peinture</h3>
                    <p className="text-gray-600 mb-4">
                      Application de la peinture de finition pour une protection et un rendu esthétique optimal.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Peinture façade haute qualité
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Large palette de couleurs disponible
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Garantie décennale
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Besoin d'un ravalement de façade ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Demandez votre devis gratuit et personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all duration-300"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33666284458"
                className="inline-block px-10 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:!text-white transition-all duration-300"
              >
                06 66 28 44 58
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import Link from 'next/link';

export const metadata = {
  title: "Enduits décoratifs - Haut en Couleur",
  description: "Enduits décoratifs à Rennes : béton ciré, stucco, tadelakt. Créez des ambiances uniques et personnalisées.",
};

export default function EnduitsDecoratifs() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Enduits décoratifs"
          subtitle="Créez des espaces uniques avec nos enduits décoratifs personnalisés. Du béton ciré au stucco vénitien, donnez du caractère à vos murs"
          backgroundImage="/img/enduits-decoratifs-hero.jpg"
        />

        {/* Types d'enduits */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Nos enduits décoratifs
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Béton ciré */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Béton ciré</h3>
                <p className="text-gray-600 mb-4">
                  Effet béton moderne et élégant, idéal pour un style contemporain et industriel.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Aspect lisse et minéral
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Résistant et facile d'entretien
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Application murs et sols
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Nombreux coloris disponibles
                  </li>
                </ul>
              </div>

              {/* Stucco vénitien */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Stucco vénitien</h3>
                <p className="text-gray-600 mb-4">
                  Enduit à la chaux traditionnel pour un rendu brillant et luxueux.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Effet marbré élégant
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Finition brillante satinée
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Respirant et écologique
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Idéal pour pièces nobles
                  </li>
                </ul>
              </div>

              {/* Tadelakt */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tadelakt</h3>
                <p className="text-gray-600 mb-4">
                  Enduit marocain à la chaux, imperméable et brillant, parfait pour les salles de bain.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Naturellement imperméable
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Antibactérien naturel
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Finition lisse et brillante
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Spécial pièces humides
                  </li>
                </ul>
              </div>

              {/* Enduit à la chaux */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enduit à la chaux</h3>
                <p className="text-gray-600 mb-4">
                  Enduit traditionnel écologique, respirant et régulateur d'humidité.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    100% naturel et écologique
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Régule l'humidité
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Effet authentique et chaleureux
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Idéal bâti ancien
                  </li>
                </ul>
              </div>
            </div>

            {/* Textures personnalisées */}
            <div className="bg-orange-50 p-8 md:p-12 rounded-2xl mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Textures et finitions personnalisées
              </h3>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                Au-delà de ces enduits classiques, nous réalisons également des finitions sur mesure selon vos envies : effets métallisés, patines, glacis, textures relief, bi-coloration, etc.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl text-center">
                  <h4 className="font-bold text-gray-800 mb-2">Effets métallisés</h4>
                  <p className="text-gray-600 text-sm">Reflets dorés, argentés, cuivrés</p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <h4 className="font-bold text-gray-800 mb-2">Patines anciennes</h4>
                  <p className="text-gray-600 text-sm">Effet vieilli et authentique</p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <h4 className="font-bold text-gray-800 mb-2">Relief et textures</h4>
                  <p className="text-gray-600 text-sm">Motifs en relief personnalisés</p>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Où appliquer des enduits décoratifs ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L4 9h3v11h10V9h3L12 2z"/>
                    </svg>
                    <div>
                      <strong className="text-gray-800">Salons et séjours</strong>
                      <p className="text-gray-600 text-sm">Créez une ambiance unique et chaleureuse</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                    </svg>
                    <div>
                      <strong className="text-gray-800">Chambres</strong>
                      <p className="text-gray-600 text-sm">Finitions douces et apaisantes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
                    </svg>
                    <div>
                      <strong className="text-gray-800">Cuisines</strong>
                      <p className="text-gray-600 text-sm">Enduits résistants et lavables</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                    </svg>
                    <div>
                      <strong className="text-gray-800">Salles de bain</strong>
                      <p className="text-gray-600 text-sm">Tadelakt imperméable et élégant</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                    </svg>
                    <div>
                      <strong className="text-gray-800">Bureaux et commerces</strong>
                      <p className="text-gray-600 text-sm">Design professionnel et moderne</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Avantages de nos enduits
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">Unicité</h4>
                    <p className="text-gray-600">Chaque réalisation est unique grâce à notre savoir-faire artisanal.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">Durabilité</h4>
                    <p className="text-gray-600">Matériaux de qualité pour une tenue exceptionnelle dans le temps.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">Écologie</h4>
                    <p className="text-gray-600">Produits naturels, respirants et respectueux de l'environnement.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">Conseil personnalisé</h4>
                    <p className="text-gray-600">Nous vous guidons dans le choix de la finition parfaite pour votre projet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Un projet d'enduit décoratif ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Parlons de votre projet et créons ensemble l'ambiance de vos rêves.
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
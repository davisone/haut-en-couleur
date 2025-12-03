import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Image from 'next/image';

export const metadata = {
  title: "Nos réalisations - Haut en Couleur",
  description: "Découvrez nos dernières réalisations en peinture intérieure, extérieure et ravalement de façade à Rennes et ses environs.",
};

const realisations = [
  {
    id: 1,
    title: "Rénovation intérieure appartement Rennes",
    category: "Peinture intérieure",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070",
    description: "Rénovation complète d'un appartement de 90m² avec peinture des murs et plafonds.",
  },
  {
    id: 2,
    title: "Façade maison individuelle",
    category: "Peinture extérieure",
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2074",
    description: "Peinture complète de la façade d'une maison avec préparation des surfaces.",
  },
  {
    id: 3,
    title: "Ravalement immeuble centre-ville",
    category: "Ravalement de façade",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031",
    description: "Ravalement complet d'un immeuble de 3 étages en centre-ville de Rennes.",
  },
  {
    id: 4,
    title: "Chambre avec enduit décoratif",
    category: "Enduits décoratifs",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070",
    description: "Application d'enduit décoratif effet béton ciré dans une chambre moderne.",
  },
  {
    id: 5,
    title: "Cuisine moderne",
    category: "Peinture intérieure",
    image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=2070",
    description: "Peinture de cuisine avec finition laquée pour un rendu moderne et élégant.",
  },
  {
    id: 6,
    title: "Bureau professionnel",
    category: "Peinture intérieure",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    description: "Rénovation des locaux d'une entreprise avec choix de couleurs corporate.",
  },
];

export default function Realisations() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Nos réalisations"
          subtitle="Découvrez quelques-uns de nos projets récents qui reflètent notre engagement envers la qualité"
          backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070"
        />

        {/* Gallery Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realisations.map((realisation) => (
                <div key={realisation.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${realisation.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {realisation.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {realisation.title}
                    </h3>
                    <p className="text-gray-600">
                      {realisation.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Un projet en tête ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Link from 'next/link';

export const metadata = {
  title: "Nos prestations - Haut en Couleur",
  description: "Découvrez tous nos services : peinture intérieure, extérieure, ravalement de façade et enduits décoratifs à Rennes.",
};

const prestations = [
  {
    id: 'peinture-interieure',
    title: 'Peinture intérieure',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 12.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    description: "Transformez vos espaces intérieurs avec nos services de peinture professionnelle.",
    services: [
      "Peinture de murs et plafonds",
      "Finitions décoratives",
      "Peinture de boiseries",
      "Conseils couleurs et ambiances"
    ],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070",
  },
  {
    id: 'peinture-exterieure',
    title: 'Peinture extérieure',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zM10 10c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
      </svg>
    ),
    description: "Protection et embellissement de vos façades avec des peintures résistantes aux intempéries.",
    services: [
      "Peinture de façades",
      "Traitement anti-humidité",
      "Peinture de volets et portes",
      "Protection longue durée"
    ],
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2074",
  },
  {
    id: 'ravalement-facade',
    title: 'Ravalement de façade',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 21h10V9l-5-4.5L7 9v12zM19 19h2v2h-2v-2zM3 19h2v2H3v-2zM11 13h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z"/>
      </svg>
    ),
    description: "Rénovation complète de vos façades pour redonner de l'éclat à votre bâtiment.",
    services: [
      "Nettoyage de façade",
      "Réparation des fissures",
      "Enduit de façade",
      "Peinture de finition"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031",
  },
  {
    id: 'enduits-decoratifs',
    title: 'Enduits décoratifs',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/>
      </svg>
    ),
    description: "Créez des ambiances uniques avec nos enduits décoratifs et textures personnalisées.",
    services: [
      "Enduit béton ciré",
      "Stucco vénitien",
      "Enduit à la chaux",
      "Textures personnalisées"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
  },
];

export default function Prestations() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Nos prestations"
          subtitle="Des services complets de peinture et rénovation pour tous vos projets"
          backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070"
        />

        {/* Services Grid */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto space-y-20">
            {prestations.map((prestation, index) => (
              <div
                key={prestation.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${prestation.image}')` }}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-primary">
                    {prestation.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    {prestation.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {prestation.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {prestation.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/prestations/${prestation.id}`}
                    className="inline-block px-8 py-3 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import BeforeAfterSection from '../components/BeforeAfterSection';
import ImageGalleryLightbox from '../components/ImageGalleryLightbox';
import SeoContentRealisations from '../components/SeoContentRealisations';
import GoogleReviews from '../components/GoogleReviews';

export const metadata: Metadata = {
  title: "Nos réalisations - Haut en Couleur",
  description: "Découvrez nos dernières réalisations en peinture intérieure, extérieure et ravalement de façade à Rennes et ses environs.",
};

// Projets avec avant/après
const beforeAfterProjects = [
  {
    id: 1,
    title: "Rénovation intérieure appartement Rennes",
    category: "Peinture intérieure",
    beforeImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074",
    afterImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070",
    description: "Rénovation complète d'un appartement de 90m² avec peinture des murs et plafonds.",
  },
  {
    id: 2,
    title: "Façade maison individuelle",
    category: "Peinture extérieure",
    beforeImage: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070",
    afterImage: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2074",
    description: "Peinture complète de la façade d'une maison avec préparation des surfaces.",
  },
  {
    id: 3,
    title: "Ravalement immeuble centre-ville",
    category: "Ravalement de façade",
    beforeImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070",
    afterImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031",
    description: "Ravalement complet d'un immeuble de 3 étages en centre-ville de Rennes.",
  },
  {
    id: 4,
    title: "Chambre avec enduit décoratif",
    category: "Enduits décoratifs",
    beforeImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070",
    afterImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070",
    description: "Application d'enduit décoratif effet béton ciré dans une chambre moderne.",
  },
];

// Galerie d'images
const galleryImages = [
  {
    id: 1,
    title: "Peinture intérieure salon",
    category: "Peinture intérieure",
    url: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=2070",
  },
  {
    id: 2,
    title: "Peinture intérieure chambre",
    category: "Peinture intérieure",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
  },
  {
    id: 3,
    title: "Peinture extérieure maison",
    category: "Peinture extérieure",
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070",
  },
  {
    id: 4,
    title: "Peinture intérieure cuisine",
    category: "Peinture intérieure",
    url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057",
  },
  {
    id: 5,
    title: "Ravalement façade immeuble",
    category: "Ravalement de façade",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  },
  {
    id: 6,
    title: "Enduit décoratif salon",
    category: "Enduits décoratifs",
    url: "https://images.unsplash.com/photo-1502672260066-6bc35f0af07e?q=80&w=2080",
  },
  {
    id: 7,
    title: "Peinture intérieure bureau",
    category: "Peinture intérieure",
    url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068",
  },
  {
    id: 8,
    title: "Ravalement façade maison",
    category: "Ravalement de façade",
    url: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2074",
  },
  {
    id: 9,
    title: "Enduit décoratif chambre",
    category: "Enduits décoratifs",
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070",
  },
  {
    id: 10,
    title: "Peinture extérieure villa",
    category: "Peinture extérieure",
    url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070",
  },
  {
    id: 11,
    title: "Peinture intérieure séjour",
    category: "Peinture intérieure",
    url: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070",
  },
  {
    id: 12,
    title: "Ravalement façade bâtiment",
    category: "Ravalement de façade",
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031",
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
          backgroundImage="/img/realisations-hero.jpg"
        />

        {/* Before/After Section */}
        <BeforeAfterSection projects={beforeAfterProjects} />

        {/* Image Gallery Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Galerie de nos réalisations
              </h2>
              <p className="text-xl text-gray-600">
                Cliquez sur une image pour l&apos;agrandir et naviguer dans la galerie
              </p>
            </div>
            <ImageGalleryLightbox images={galleryImages} />
          </div>
        </section>

        {/* Google Reviews */}
        <GoogleReviews placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID} />

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

        {/* Contenu SEO */}
        <SeoContentRealisations />

      </main>
      <Footer />
    </>
  );
}
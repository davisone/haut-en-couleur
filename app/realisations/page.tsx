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
  description: "Découvrez nos dernières réalisations en peinture intérieure, enduit, papier peint et revêtement de sol à Rennes et ses environs.",
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
    title: "Pose de papier peint salon",
    category: "Papier peint",
    beforeImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070",
    afterImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
    description: "Pose de papier peint panoramique dans un salon moderne avec raccords parfaits.",
  },
  {
    id: 3,
    title: "Revêtement de sol PVC",
    category: "Revêtement de sol",
    beforeImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070",
    afterImage: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?q=80&w=2070",
    description: "Pose de sol PVC imitation parquet dans une pièce de vie.",
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
    title: "Pose de papier peint",
    category: "Papier peint",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
  },
  {
    id: 4,
    title: "Peinture intérieure cuisine",
    category: "Peinture intérieure",
    url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057",
  },
  {
    id: 5,
    title: "Enduit de lissage",
    category: "Enduit",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
  },
  {
    id: 6,
    title: "Peinture intérieure bureau",
    category: "Peinture intérieure",
    url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068",
  },
  {
    id: 7,
    title: "Revêtement de sol lino",
    category: "Revêtement de sol",
    url: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?q=80&w=2070",
  },
  {
    id: 8,
    title: "Pose papier peint chambre",
    category: "Papier peint",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
  },
  {
    id: 9,
    title: "Peinture intérieure séjour",
    category: "Peinture intérieure",
    url: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070",
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
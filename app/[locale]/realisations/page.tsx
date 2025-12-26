import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import PageHero from '@/app/components/PageHero';
import BeforeAfterSection from '@/app/components/BeforeAfterSection';
import ImageGalleryLightbox from '@/app/components/ImageGalleryLightbox';
import SeoContentRealisations from '@/app/components/SeoContentRealisations';
import GoogleReviews from '@/app/components/GoogleReviews';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Realisations'});

  return {
    title: `${t('heroTitle')} - Haut en Couleur`,
    description: t('heroSubtitle'),
  };
}

export default function Realisations() {
  const t = useTranslations('Realisations');
  const tData = useTranslations('RealisationsData');

  // Projets avec avant/après
  const beforeAfterProjects = [
    {
      id: 1,
      title: tData('beforeAfterProjects.project1.title'),
      category: tData('beforeAfterProjects.project1.category'),
      beforeImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074",
      afterImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070",
      description: tData('beforeAfterProjects.project1.description'),
    },
    {
      id: 2,
      title: tData('beforeAfterProjects.project2.title'),
      category: tData('beforeAfterProjects.project2.category'),
      beforeImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070",
      afterImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
      description: tData('beforeAfterProjects.project2.description'),
    },
    {
      id: 3,
      title: tData('beforeAfterProjects.project3.title'),
      category: tData('beforeAfterProjects.project3.category'),
      beforeImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070",
      afterImage: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?q=80&w=2070",
      description: tData('beforeAfterProjects.project3.description'),
    },
  ];

  // Galerie d'images
  const galleryImages = [
    {
      id: 1,
      title: tData('galleryImages.image1.title'),
      category: tData('galleryImages.image1.category'),
      url: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=2070",
    },
    {
      id: 2,
      title: tData('galleryImages.image2.title'),
      category: tData('galleryImages.image2.category'),
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    },
    {
      id: 3,
      title: tData('galleryImages.image3.title'),
      category: tData('galleryImages.image3.category'),
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
    },
    {
      id: 4,
      title: tData('galleryImages.image4.title'),
      category: tData('galleryImages.image4.category'),
      url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057",
    },
    {
      id: 5,
      title: tData('galleryImages.image5.title'),
      category: tData('galleryImages.image5.category'),
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
    },
    {
      id: 6,
      title: tData('galleryImages.image6.title'),
      category: tData('galleryImages.image6.category'),
      url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068",
    },
    {
      id: 7,
      title: tData('galleryImages.image7.title'),
      category: tData('galleryImages.image7.category'),
      url: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?q=80&w=2070",
    },
    {
      id: 8,
      title: tData('galleryImages.image8.title'),
      category: tData('galleryImages.image8.category'),
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
    },
    {
      id: 9,
      title: tData('galleryImages.image9.title'),
      category: tData('galleryImages.image9.category'),
      url: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          backgroundImage="/img/realisations-hero.jpg"
        />

        {/* Before/After Section */}
        <BeforeAfterSection projects={beforeAfterProjects} />

        {/* Image Gallery Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('galleryTitle')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('gallerySubtitle')}
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
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('ctaSubtitle')}
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
            >
              {t('ctaButton')}
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
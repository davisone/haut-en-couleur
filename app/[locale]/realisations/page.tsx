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
    alternates: {
      canonical: `/${locale}/realisations`,
      languages: {
        'fr': '/fr/realisations',
        'en': '/en/realisations',
        'x-default': '/fr/realisations',
      },
    },
  };
}

export default function Realisations() {
  const t = useTranslations('Realisations');
  const tData = useTranslations('RealisationsData');

  // Projets avec avant/après
  const beforeAfterProjects = [
    {
      id: 1,
      title: tData('beforeAfterProjects.project2.title'),
      category: tData('beforeAfterProjects.project2.category'),
      beforeImage: "/img/escalier_2.jpeg",
      afterImage: "/img/escalier.jpeg",
      description: tData('beforeAfterProjects.project2.description'),
    },
    {
      id: 2,
      title: tData('beforeAfterProjects.project1.title'),
      category: tData('beforeAfterProjects.project1.category'),
      beforeImage: "/img/escalier_après.jpeg",
      afterImage: "/img/escalier_avant.jpeg",
      description: tData('beforeAfterProjects.project1.description'),
    },
    {
      id: 3,
      title: tData('beforeAfterProjects.project3.title'),
      category: tData('beforeAfterProjects.project3.category'),
      beforeImage: "/img/mur_2.jpeg",
      afterImage: "/img/salle_de_bain.jpeg",
      description: tData('beforeAfterProjects.project3.description'),
    },
  ];

  // Galerie d'images
  const galleryImages = [
    {
      id: 1,
      title: tData('galleryImages.image1.title'),
      category: tData('galleryImages.image1.category'),
      url: "/img/chambre.jpeg",
    },
    {
      id: 2,
      title: tData('galleryImages.image2.title'),
      category: tData('galleryImages.image2.category'),
      url: "/img/sallon_2.jpeg",
    },
    {
      id: 3,
      title: tData('galleryImages.image3.title'),
      category: tData('galleryImages.image3.category'),
      url: "/img/chambre_2.jpeg",
    },
    {
      id: 4,
      title: tData('galleryImages.image4.title'),
      category: tData('galleryImages.image4.category'),
      url: "/img/escalier_3.jpeg",
    },
    {
      id: 5,
      title: tData('galleryImages.image5.title'),
      category: tData('galleryImages.image5.category'),
      url: "/img/mur.jpeg",
    },
    {
      id: 6,
      title: tData('galleryImages.image6.title'),
      category: tData('galleryImages.image6.category'),
      url: "/img/salle_a_manger.jpeg",
    },
    {
      id: 7,
      title: tData('galleryImages.image7.title'),
      category: tData('galleryImages.image7.category'),
      url: "/img/couloir.jpeg",
    },
    {
      id: 8,
      title: tData('galleryImages.image8.title'),
      category: tData('galleryImages.image8.category'),
      url: "/img/sallon.jpeg",
    },
    {
      id: 9,
      title: tData('galleryImages.image9.title'),
      category: tData('galleryImages.image9.category'),
      url: "/img/escalier.jpeg",
    },
    {
      id: 10,
      title: tData('galleryImages.image10.title'),
      category: tData('galleryImages.image10.category'),
      url: "/img/chambre_3.jpeg",
    },
    {
      id: 11,
      title: tData('galleryImages.image11.title'),
      category: tData('galleryImages.image11.category'),
      url: "/img/chambre_4.jpeg",
    },
    {
      id: 12,
      title: tData('galleryImages.image12.title'),
      category: tData('galleryImages.image12.category'),
      url: "/img/chambre_5.jpeg",
    },
    {
      id: 13,
      title: tData('galleryImages.image13.title'),
      category: tData('galleryImages.image13.category'),
      url: "/img/chambre_6.jpeg",
    },
    {
      id: 14,
      title: tData('galleryImages.image14.title'),
      category: tData('galleryImages.image14.category'),
      url: "/img/chambre_7.jpeg",
    },
    {
      id: 15,
      title: tData('galleryImages.image15.title'),
      category: tData('galleryImages.image15.category'),
      url: "/img/chambre_8.jpeg",
    },
    {
      id: 16,
      title: tData('galleryImages.image16.title'),
      category: tData('galleryImages.image16.category'),
      url: "/img/cchambre_9.jpeg",
    },
    {
      id: 17,
      title: tData('galleryImages.image17.title'),
      category: tData('galleryImages.image17.category'),
      url: "/img/escalier_2.jpeg",
    },
    {
      id: 18,
      title: tData('galleryImages.image18.title'),
      category: tData('galleryImages.image18.category'),
      url: "/img/escalier_4.jpeg",
    },
    {
      id: 19,
      title: tData('galleryImages.image19.title'),
      category: tData('galleryImages.image19.category'),
      url: "/img/escalier_5.jpeg",
    },
    {
      id: 20,
      title: tData('galleryImages.image20.title'),
      category: tData('galleryImages.image20.category'),
      url: "/img/escalier_6.jpeg",
    },
    {
      id: 21,
      title: tData('galleryImages.image21.title'),
      category: tData('galleryImages.image21.category'),
      url: "/img/escalier_7.jpeg",
    },
    {
      id: 22,
      title: tData('galleryImages.image22.title'),
      category: tData('galleryImages.image22.category'),
      url: "/img/escalier_8.jpeg",
    },
    {
      id: 23,
      title: tData('galleryImages.image23.title'),
      category: tData('galleryImages.image23.category'),
      url: "/img/escalier_9.jpeg",
    },
    {
      id: 24,
      title: tData('galleryImages.image24.title'),
      category: tData('galleryImages.image24.category'),
      url: "/img/escalier_10.jpeg",
    },
    {
      id: 25,
      title: tData('galleryImages.image25.title'),
      category: tData('galleryImages.image25.category'),
      url: "/img/escalier_11.jpeg",
    },
    {
      id: 26,
      title: tData('galleryImages.image26.title'),
      category: tData('galleryImages.image26.category'),
      url: "/img/couloir_2.jpeg",
    },
    {
      id: 27,
      title: tData('galleryImages.image27.title'),
      category: tData('galleryImages.image27.category'),
      url: "/img/mur_2.jpeg",
    },
    {
      id: 28,
      title: tData('galleryImages.image28.title'),
      category: tData('galleryImages.image28.category'),
      url: "/img/mur_3.jpeg",
    },
    {
      id: 29,
      title: tData('galleryImages.image29.title'),
      category: tData('galleryImages.image29.category'),
      url: "/img/salle_de_bain.jpeg",
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
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {t('galleryTitle')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t('gallerySubtitle')}
              </p>
            </div>
            <ImageGalleryLightbox images={galleryImages} />
          </div>
        </section>

        {/* Google Reviews */}
        <GoogleReviews placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID} />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
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
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import PageHero from '@/app/components/PageHero';
import Link from 'next/link';
import SeoContentPrestations from '@/app/components/SeoContentPrestations';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Prestations'});

  return {
    title: `${t('heroTitle')} - Haut en Couleur`,
    description: t('heroSubtitle'),
  };
}

export default function Prestations() {
  const t = useTranslations('Prestations');
  const tData = useTranslations('PrestationsData');

  const prestations = [
    {
      id: 'peinture-interieure',
      title: tData('peintureInterieure.title'),
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 12.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      description: tData('peintureInterieure.description'),
      services: [
        tData('peintureInterieure.services.0'),
        tData('peintureInterieure.services.1'),
        tData('peintureInterieure.services.2'),
        tData('peintureInterieure.services.3')
      ],
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070",
    },
    {
      id: 'enduit',
      title: tData('enduit.title'),
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
        </svg>
      ),
      description: tData('enduit.description'),
      services: [
        tData('enduit.services.0'),
        tData('enduit.services.1'),
        tData('enduit.services.2'),
        tData('enduit.services.3')
      ],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
    },
    {
      id: 'papier-peint',
      title: tData('papierPeint.title'),
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
        </svg>
      ),
      description: tData('papierPeint.description'),
      services: [
        tData('papierPeint.services.0'),
        tData('papierPeint.services.1'),
        tData('papierPeint.services.2'),
        tData('papierPeint.services.3')
      ],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
    },
    {
      id: 'revetement-sol',
      title: tData('revetementSol.title'),
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3z"/>
        </svg>
      ),
      description: tData('revetementSol.description'),
      services: [
        tData('revetementSol.services.0'),
        tData('revetementSol.services.1'),
        tData('revetementSol.services.2'),
        tData('revetementSol.services.3')
      ],
      image: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?q=80&w=2070",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          backgroundImage="/img/prestations-hero.jpg"
        />

        {/* Services Grid */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
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
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 text-primary">
                    {prestation.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    {prestation.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {prestation.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {prestation.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
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
                    {t('learnMore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contenu SEO */}
        <SeoContentPrestations />
      </main>
      <Footer />
    </>
  );
}
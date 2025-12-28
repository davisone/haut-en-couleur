import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import PageHero from '@/app/components/PageHero';
import SectionEntreprise from '@/app/components/SectionEntreprise';
import Timeline from '@/app/components/Timeline';
import SeoContentQuiSommesNous from '@/app/components/SeoContentQuiSommesNous';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'QuiSommesNous'});

  return {
    title: `${t('heroTitle')} - Haut en Couleur`,
    description: t('heroSubtitle'),
  };
}

export default function QuiSommesNous() {
  const t = useTranslations('QuiSommesNous');

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          backgroundImage="/img/qui-sommes-nous-hero.jpg"
        />
        <SectionEntreprise />

        {/* Timeline - Notre histoire */}
        <Timeline />

        {/* Section supplémentaire - Notre équipe */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              {t('teamTitle')}
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p dangerouslySetInnerHTML={{__html: t.raw('teamDesc1')}} />
              <p dangerouslySetInnerHTML={{__html: t.raw('teamDesc2')}} />
              <p dangerouslySetInnerHTML={{__html: t.raw('teamDesc3')}} />
            </div>
          </div>
        </section>

        {/* Section - Nos valeurs */}
        <section className="py-20 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              {t('valuesTitle')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Qualité */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">{t('value1Title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {t('value1Desc')}
                </p>
              </div>

              {/* Écoute */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">{t('value2Title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {t('value2Desc')}
                </p>
              </div>

              {/* Réactivité */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">{t('value3Title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {t('value3Desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu SEO */}
        <SeoContentQuiSommesNous />
      </main>
      <Footer />
    </>
  );
}
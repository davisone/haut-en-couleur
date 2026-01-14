import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import PageHero from '@/app/components/PageHero';
import SectionEntreprise from '@/app/components/SectionEntreprise';
import Timeline from '@/app/components/Timeline';
import SectionValeurs from '@/app/components/SectionValeurs';
import SeoContentQuiSommesNous from '@/app/components/SeoContentQuiSommesNous';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'QuiSommesNous'});

  return {
    title: `${t('heroTitle')} - Haut en Couleur`,
    description: t('heroSubtitle'),
    alternates: {
      canonical: `/${locale}/qui-sommes-nous`,
      languages: {
        'fr': '/fr/qui-sommes-nous',
        'en': '/en/qui-sommes-nous',
        'x-default': '/fr/qui-sommes-nous',
      },
    },
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
          backgroundImage="/img/prestations-hero.jpg"
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
        <SectionValeurs />

        {/* Contenu SEO */}
        <SeoContentQuiSommesNous />
      </main>
      <Footer />
    </>
  );
}
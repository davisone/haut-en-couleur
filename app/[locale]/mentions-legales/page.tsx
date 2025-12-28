import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import PageHero from '@/app/components/PageHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'MentionsLegales' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default function MentionsLegales() {
  const t = useTranslations('MentionsLegales');

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          backgroundImage="/img/default-hero.jpg"
        />

        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">

            {/* Éditeur du site */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('section1.title')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.companyName') }} />
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.legalForm') }} />
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.address') }} />
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.siret') }} />
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.email') }} />
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.phone') }} />
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.publisher') }} />
            </div>

            {/* Hébergeur */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('section2.title')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section2.name') }} />
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section2.address') }} />
              <p className="text-gray-600 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section2.website') }} />
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('section3.title')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('section3.paragraph1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('section3.paragraph2')}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t('section3.paragraph3')}
              </p>
            </div>

            {/* Protection des données */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('section4.title')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('section4.paragraph1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('section4.paragraph2')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>{t('section4.contactEmail')}</li>
                <li>{t('section4.contactPhone')}</li>
                <li>{t('section4.contactMail')}</li>
              </ul>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('section4.paragraph3') }} />
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section5.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section5.paragraph1')}
              </p>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('section5.paragraph2') }} />
            </div>

            {/* Limitation de responsabilité */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section6.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section6.paragraph1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('section6.paragraph2')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>{t('section6.liability1')}</li>
                <li>{t('section6.liability2')}</li>
                <li>{t('section6.liability3')}</li>
              </ul>
            </div>

            {/* Droit applicable */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section7.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section7.paragraph1')}
              </p>
              <p className="text-gray-600">
                {t('section7.paragraph2')}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('section8.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section8.paragraph1')}
              </p>
              <div className="space-y-2">
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('section8.emailLabel') }} />
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('section8.phoneLabel') }} />
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              {t('lastUpdate')} {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
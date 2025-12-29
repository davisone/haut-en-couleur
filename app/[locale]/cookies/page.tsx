import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import PageHero from '@/app/components/PageHero';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'CookiesPage' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/cookies`,
      languages: {
        'fr': '/fr/cookies',
        'en': '/en/cookies',
        'x-default': '/fr/cookies',
      },
    },
  };
}

export default function CookiesPage() {
  const t = useTranslations('CookiesPage');

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          backgroundImage="/img/cookies-hero.jpg"
        />

        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t('section1.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('section1.content')}
                </p>
              </div>

              {/* Types de cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t('section2.title')}
                </h2>

                <div className="space-y-6">
                  {/* Cookies essentiels */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {t('cookieTypes.essential.title')}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {t('cookieTypes.essential.description')}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li dangerouslySetInnerHTML={{ __html: t.raw('cookieTypes.essential.cookie1') }} />
                      <li dangerouslySetInnerHTML={{ __html: t.raw('cookieTypes.essential.cookie2') }} />
                    </ul>
                  </div>

                  {/* Cookies de sécurité */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {t('cookieTypes.security.title')}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {t('cookieTypes.security.description')}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li dangerouslySetInnerHTML={{ __html: t.raw('cookieTypes.security.cookie1') }} />
                    </ul>
                  </div>

                  {/* Cookies analytiques (optionnels) */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {t('cookieTypes.analytics.title')}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {t('cookieTypes.analytics.description')}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li dangerouslySetInnerHTML={{ __html: t.raw('cookieTypes.analytics.cookie1') }} />
                      <li dangerouslySetInnerHTML={{ __html: t.raw('cookieTypes.analytics.cookie2') }} />
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gestion des cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t('section3.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('section3.paragraph1')}
                </p>

                <div className="bg-orange-50 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {t('section3.paragraph2Title')}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section3.browser1') }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section3.browser2') }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section3.browser3') }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section3.browser4') }} />
                  </ul>
                </div>
              </div>

              {/* Durée de conservation */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t('section4.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('section4.content')}
                </p>
              </div>

              {/* Vos droits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t('section5.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('section5.paragraph1')}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>{t('section5.right1')}</li>
                  <li>{t('section5.right2')}</li>
                  <li>{t('section5.right3')}</li>
                  <li>{t('section5.right4')}</li>
                  <li>{t('section5.right5')}</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t('section6.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('section6.paragraph1')}
                </p>
                <div className="space-y-2 text-gray-700">
                  <p dangerouslySetInnerHTML={{ __html: t.raw('section6.email') }} />
                  <p dangerouslySetInnerHTML={{ __html: t.raw('section6.phone') }} />
                  <p dangerouslySetInnerHTML={{ __html: t.raw('section6.address') }} />
                </div>
              </div>

              {/* Dernière mise à jour */}
              <div className="text-sm text-gray-500 italic border-t border-gray-200 pt-6">
                {t('lastUpdate')} {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
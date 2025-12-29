import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import PageHero from '@/app/components/PageHero';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PolitiqueConfidentialite' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/politique-confidentialite`,
      languages: {
        'fr': '/fr/politique-confidentialite',
        'en': '/en/politique-confidentialite',
        'x-default': '/fr/politique-confidentialite',
      },
    },
  };
}

export default async function PolitiqueConfidentialite({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('PolitiqueConfidentialite');

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          backgroundImage="/img/default-hero.jpg"
        />

        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto prose prose-lg">

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-600 mb-4">
                {t('intro.paragraph1')}
              </p>
              <p className="text-gray-600">
                {t('intro.paragraph2')}
              </p>
            </div>

            {/* Responsable du traitement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section1.title')}</h2>
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.companyName') }} />
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.location') }} />
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.email') }} />
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: t.raw('section1.phone') }} />
            </div>

            {/* Données collectées */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section2.title')}</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">{t('section2.subsection1.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('section2.subsection1.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('section2.subsection1.item1')}</li>
                <li>{t('section2.subsection1.item2')}</li>
                <li>{t('section2.subsection1.item3')}</li>
                <li>{t('section2.subsection1.item4')}</li>
                <li>{t('section2.subsection1.item5')}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{t('section2.subsection2.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('section2.subsection2.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('section2.subsection2.item1')}</li>
                <li>{t('section2.subsection2.item2')}</li>
                <li>{t('section2.subsection2.item3')}</li>
                <li>{t('section2.subsection2.item4')}</li>
                <li>{t('section2.subsection2.item5')}</li>
              </ul>
            </div>

            {/* Finalités */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section3.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section3.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li dangerouslySetInnerHTML={{ __html: t.raw('section3.purpose1') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section3.purpose2') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section3.purpose3') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section3.purpose4') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section3.purpose5') }} />
              </ul>
            </div>

            {/* Base légale */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section4.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section4.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li dangerouslySetInnerHTML={{ __html: t.raw('section4.basis1') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section4.basis2') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section4.basis3') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section4.basis4') }} />
              </ul>
            </div>

            {/* Destinataires */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section5.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section5.paragraph1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('section5.paragraph2')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('section5.recipient1')}</li>
                <li>{t('section5.recipient2')}</li>
                <li>{t('section5.recipient3')}</li>
              </ul>
              <p className="text-gray-600">
                {t('section5.paragraph3')}
              </p>
            </div>

            {/* Durée de conservation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section6.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section6.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li dangerouslySetInnerHTML={{ __html: t.raw('section6.duration1') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section6.duration2') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section6.duration3') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section6.duration4') }} />
              </ul>
              <p className="text-gray-600">
                {t('section6.outro')}
              </p>
            </div>

            {/* Vos droits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section7.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section7.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li dangerouslySetInnerHTML={{ __html: t.raw('section7.right1') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section7.right2') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section7.right3') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section7.right4') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section7.right5') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section7.right6') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section7.right7') }} />
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">{t('section7.exerciseTitle')}</h3>
              <p className="text-gray-600 mb-4">
                {t('section7.exerciseIntro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('section7.exerciseEmail')}</li>
                <li>{t('section7.exercisePhone')}</li>
                <li>{t('section7.exerciseMail')}</li>
              </ul>
              <p className="text-gray-600 mb-4">
                {t('section7.responseTime')}
              </p>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('section7.cnil') }} />
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section8.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section8.intro')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">{t('section8.subsection1.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('section8.subsection1.content')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{t('section8.subsection2.title')}</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li dangerouslySetInnerHTML={{ __html: t.raw('section8.subsection2.type1') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section8.subsection2.type2') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section8.subsection2.type3') }} />
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{t('section8.subsection3.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('section8.subsection3.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li dangerouslySetInnerHTML={{ __html: t.raw('section8.subsection3.chrome') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section8.subsection3.firefox') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section8.subsection3.safari') }} />
                <li dangerouslySetInnerHTML={{ __html: t.raw('section8.subsection3.edge') }} />
              </ul>
            </div>

            {/* Sécurité */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section9.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section9.paragraph1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('section9.paragraph2')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('section9.measure1')}</li>
                <li>{t('section9.measure2')}</li>
                <li>{t('section9.measure3')}</li>
                <li>{t('section9.measure4')}</li>
              </ul>
            </div>

            {/* Transferts internationaux */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section10.title')}</h2>
              <p className="text-gray-600">
                {t('section10.content')}
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('section11.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('section11.paragraph1')}
              </p>
              <p className="text-gray-600">
                {t('section11.paragraph2')}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('contact.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('contact.intro')}
              </p>
              <div className="space-y-2">
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('contact.email') }} />
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('contact.phone') }} />
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              {t('lastUpdate')} {new Date().toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
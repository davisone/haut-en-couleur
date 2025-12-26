'use client';

import {useTranslations} from 'next-intl';

export default function SeoContentPrestations() {
  const t = useTranslations('SeoContentPrestations');

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bloc 1 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('block1Title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('block1Paragraph1') }} />
            <p className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('block1Paragraph2') }} />
            <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('block1Paragraph3') }} />
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('block2Title')}
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-gray-800 mb-2">{t('service1Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('service1Desc')}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cameleon-blue">
                <h3 className="font-bold text-gray-800 mb-2">{t('service2Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('service2Desc')}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cameleon-emerald">
                <h3 className="font-bold text-gray-800 mb-2">{t('service3Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('service3Desc')}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cameleon-yellow">
                <h3 className="font-bold text-gray-800 mb-2">{t('service4Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('service4Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloc processus */}
        <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {t('processTitle')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{t('step1Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('step1Desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{t('step2Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('step2Desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{t('step3Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('step3Desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{t('step4Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('step4Desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Bloc avantages */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {t('benefitsTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">{t('benefit1Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('benefit1Desc')}
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">{t('benefit2Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('benefit2Desc')}
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">{t('benefit3Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('benefit3Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
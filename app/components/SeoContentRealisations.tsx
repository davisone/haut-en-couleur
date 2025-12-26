'use client';

import {useTranslations} from 'next-intl';

export default function SeoContentRealisations() {
  const t = useTranslations('SeoContentRealisations');

  return (
    <section className="py-16 px-4 bg-gray-50">
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
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">{t('project1Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('project1Desc')}
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">{t('project2Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('project2Desc')}
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">{t('project3Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('project3Desc')}
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">{t('project4Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('project4Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
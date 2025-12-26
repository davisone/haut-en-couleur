'use client';

import {useTranslations} from 'next-intl';

export default function SeoContent() {
  const t = useTranslations('SeoHome');

  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bloc 1 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('block1Title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('block1Content') }} />
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('block2Title')}
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t.raw('reason1') }} />
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t.raw('reason2') }} />
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t.raw('reason3') }} />
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t.raw('reason4') }} />
              </li>
            </ul>
          </div>
        </div>

        {/* Bloc zones d'intervention */}
        <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            {t('zonesTitle')}
          </h2>
          <p className="text-gray-600 text-center mb-6" dangerouslySetInnerHTML={{ __html: t.raw('zonesSubtitle') }} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
            <div className="p-3 bg-gray-50 rounded-lg">{t('city1')}</div>
            <div className="p-3 bg-gray-50 rounded-lg">{t('city2')}</div>
            <div className="p-3 bg-gray-50 rounded-lg">{t('city5')}</div>
            <div className="p-3 bg-gray-50 rounded-lg">Cesson-Sévigné</div>
            <div className="p-3 bg-gray-50 rounded-lg">{t('city10')}</div>
            <div className="p-3 bg-gray-50 rounded-lg">Saint-Grégoire</div>
            <div className="p-3 bg-gray-50 rounded-lg">{t('city11')}</div>
            <div className="p-3 bg-gray-50 rounded-lg">{t('city12')}</div>
            <div className="p-3 bg-gray-50 rounded-lg">Chantepie</div>
            <div className="p-3 bg-gray-50 rounded-lg">Thorigné-Fouillard</div>
            <div className="p-3 bg-gray-50 rounded-lg">{t('city5')}</div>
            <div className="p-3 bg-gray-50 rounded-lg">Chartres-de-Bretagne</div>
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            {t('moreCities')}
          </p>
        </div>
      </div>
    </section>
  );
}
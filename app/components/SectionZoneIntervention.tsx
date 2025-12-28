'use client';

import dynamic from 'next/dynamic';
import {useTranslations} from 'next-intl';

export default function ServiceArea() {
  const t = useTranslations('InterventionZone');

  // Import dynamique pour éviter les erreurs SSR avec Leaflet
  const Map = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center transition-colors">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">{t('loadingMap')}</p>
        </div>
      </div>
    )
  });

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {t('title')}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t.raw('description1') }} />
              <p dangerouslySetInnerHTML={{ __html: t.raw('description2') }} />
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('city1')}</li>
                <li>{t('city2')}</li>
                <li>{t('city3')}</li>
                <li>{t('city4')}</li>
                <li>{t('city5')}</li>
                <li>{t('city6')}</li>
                <li>{t('city7')}</li>
                <li>{t('city8')}</li>
              </ul>
              <p className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/30 border-l-4 border-primary rounded">
                <strong>{t('ctaTitle')}</strong> {t('ctaText')}
              </p>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
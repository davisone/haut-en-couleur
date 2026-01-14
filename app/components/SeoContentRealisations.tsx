'use client';

import { useEffect, useState } from 'react';
import {useTranslations} from 'next-intl';

export default function SeoContentRealisations() {
  const t = useTranslations('SeoContentRealisations');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/img/couloir_2.jpeg')",
            transform: `translateY(${(scrollY - 3500) * 0.25}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gray-50/95 dark:bg-gray-900/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bloc 1 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {t('block1Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('block1Paragraph1') }} />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('block1Paragraph2') }} />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('block1Paragraph3') }} />
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {t('block2Title')}
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{t('project1Title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('project1Desc')}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{t('project2Title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('project2Desc')}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{t('project3Title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('project3Desc')}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{t('project4Title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
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
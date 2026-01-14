'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function SectionValeurs() {
  const t = useTranslations('QuiSommesNous');
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
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/img/escalier_4.jpeg')",
            transform: `translateY(${(scrollY - 2000) * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          {t('valuesTitle')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Qualité */}
          <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
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
          <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
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
          <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
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
  );
}
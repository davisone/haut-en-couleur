'use client';

import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations('NotFound');
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 pt-20">
        <div className="max-w-2xl mx-auto text-center py-8">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <div className="h-2 w-32 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Message */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('description')}
          </p>

          {/* Suggestions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {t('suggestionsTitle')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href={`/${locale}/`}
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-orange-50 transition-all group"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                <div className="text-left">
                  <p className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {t('link1Title')}
                  </p>
                  <p className="text-sm text-gray-500">{t('link1Description')}</p>
                </div>
              </Link>

              <Link
                href={`/${locale}/prestations`}
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-orange-50 transition-all group"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 12.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div className="text-left">
                  <p className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {t('link2Title')}
                  </p>
                  <p className="text-sm text-gray-500">{t('link2Description')}</p>
                </div>
              </Link>

              <Link
                href={`/${locale}/realisations`}
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-orange-50 transition-all group"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                <div className="text-left">
                  <p className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {t('link3Title')}
                  </p>
                  <p className="text-sm text-gray-500">{t('link3Description')}</p>
                </div>
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-orange-50 transition-all group"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div className="text-left">
                  <p className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {t('link4Title')}
                  </p>
                  <p className="text-sm text-gray-500">{t('link4Description')}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={`/${locale}/`}
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('ctaButton')}
          </Link>

          {/* Decorative Paint Brush */}
          <div className="mt-12 opacity-20">
            <svg className="w-32 h-32 mx-auto text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
            </svg>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
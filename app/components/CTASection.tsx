'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('Realisations');
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
            backgroundImage: "url('/img/sallon.jpeg')",
            transform: `translateY(${(scrollY - 3000) * 0.2}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-gray-800/85 dark:from-gray-900/90 dark:to-gray-800/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          {t('ctaTitle')}
        </h2>
        <p className="text-xl text-gray-100 mb-8">
          {t('ctaSubtitle')}
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          {t('ctaButton')}
        </a>
      </div>
    </section>
  );
}
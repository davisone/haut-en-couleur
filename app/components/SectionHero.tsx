'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const t = useTranslations('Hero');
  const locale = useLocale();

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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Effet Parallaxe */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/img/Page_acceuil.jpg')",
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        />
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            opacity: Math.min(0.5 + scrollY * 0.001, 0.8),
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{
          transform: `translateY(${scrollY * -0.3}px)`,
          opacity: Math.max(1 - scrollY * 0.002, 0),
        }}
      >
        {/* Logo */}


        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white mb-4 font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('subtitle')}
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {t('description')}
        </p>

        {/* CTA Button */}
        <Link
          href={`/${locale}/contact`}
          className="inline-block px-10 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          {t('cta')}
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

export default function OurCompany() {
  const t = useTranslations('Company');
  const locale = useLocale();
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
    <section id="qui-sommes-nous" className="relative py-20 px-4 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/img/chambre.jpeg')",
            transform: `translateY(${(scrollY - 800) * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('title')}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t.raw('description1') }} />
              <p dangerouslySetInnerHTML={{ __html: t.raw('description2') }} />
              <p dangerouslySetInnerHTML={{ __html: t.raw('description3') }} />
              <p dangerouslySetInnerHTML={{ __html: t.raw('description4') }} />
            </div>
            <div className="mt-8">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-8 py-3 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:!text-white transition-all duration-300"
              >
                {t('cta')}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/img/sallon.jpeg')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
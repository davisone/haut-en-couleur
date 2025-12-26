'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

export default function OurCompany() {
  const t = useTranslations('Company');
  const locale = useLocale();

  return (
    <section id="qui-sommes-nous" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('title')}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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
                backgroundImage: "url('/img/entreprise.jpg')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
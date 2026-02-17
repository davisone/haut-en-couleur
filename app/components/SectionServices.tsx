'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');
  const locale = useLocale();

  const services = [
    {
      id: 'peinture-interieure',
      titleKey: 'interiorPainting.title',
      descriptionKey: 'interiorPainting.description',
      image: '/img/couloir.jpeg',
      borderColor: 'border-top-cameleon-turquoise',
    },
    {
      id: 'enduit',
      titleKey: 'coating.title',
      descriptionKey: 'coating.description',
      image: '/img/mur.jpeg',
      borderColor: 'border-top-cameleon-lime',
    },
    {
      id: 'papier-peint',
      titleKey: 'wallpaper.title',
      descriptionKey: 'wallpaper.description',
      image: '/img/chambre.jpeg',
      borderColor: 'border-top-cameleon-yellow',
    },
    {
      id: 'revetement-sol',
      titleKey: 'flooring.title',
      descriptionKey: 'flooring.description',
      image: '/img/escalier_avant.jpeg',
      borderColor: 'border-top-cameleon-blue',
    },
  ];

  return (
    <section id="prestations" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/${locale}/prestations/${service.id}`}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${service.borderColor}`}
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={t(service.titleKey)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-500" />

                {/* Badge animé */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 dark:text-gray-100 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  {t('discover')}
                </div>
              </div>
              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {t(service.descriptionKey)}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all duration-300">
                  {t('discover')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
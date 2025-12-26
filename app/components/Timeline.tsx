'use client';

import {useTranslations} from 'next-intl';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export default function Timeline() {
  const t = useTranslations('Timeline');

  const events: TimelineEvent[] = [
    {
      year: t('event1.year'),
      title: t('event1.title'),
      description: t('event1.description'),
    },
    {
      year: t('event2.year'),
      title: t('event2.title'),
      description: t('event2.description'),
    },
    {
      year: t('event3.year'),
      title: t('event3.title'),
      description: t('event3.description'),
    },
    {
      year: t('event4.year'),
      title: t('event4.title'),
      description: t('event4.description'),
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          {t('title')}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-orange-400 to-primary"></div>

          {/* Événements */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Contenu */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-block px-4 py-2 bg-primary text-white font-bold rounded-full text-lg">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Point central sur la ligne */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Espace vide de l'autre côté */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Message final */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-lg">
            <p className="text-xl text-gray-700 font-medium">
              {t('continuingMessage')}
            </p>
            <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
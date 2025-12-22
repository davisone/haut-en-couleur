'use client';

import Link from 'next/link';

const services = [
  {
    id: 'peinture-interieure',
    title: 'Peinture intérieure',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070',
    description: 'Transformation et embellissement de vos espaces intérieurs',
    borderColor: 'border-top-cameleon-turquoise',
  },
  {
    id: 'peinture-exterieure',
    title: 'Peinture extérieure',
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2074',
    description: 'Protection et esthétique pour vos façades extérieures',
    borderColor: 'border-top-cameleon-lime',
  },
  {
    id: 'ravalement-facade',
    title: 'Ravalement de façade',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031',
    description: 'Rénovation complète de vos murs extérieurs',
    borderColor: 'border-top-cameleon-cyan',
  },
  {
    id: 'enduits-decoratifs',
    title: 'Enduits décoratifs',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
    description: 'Finitions uniques et textures personnalisées',
    borderColor: 'border-top-cameleon-yellow',
  },
];

export default function Services() {
  return (
    <section id="prestations" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            NOS SERVICES
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez notre expertise dans différents domaines
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${service.borderColor}`}
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-500" />

                {/* Badge animé */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  Découvrir
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all duration-300">
                  En savoir plus
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
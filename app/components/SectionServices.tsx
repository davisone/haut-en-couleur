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
    <section id="prestations" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
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
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl cameleon-shadow-hover transition-all duration-300 ${service.borderColor}`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-cameleon-blue font-semibold group-hover:text-cameleon-cyan transition-colors">
                  En savoir plus
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
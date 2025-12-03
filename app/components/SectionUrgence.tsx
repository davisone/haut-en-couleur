import Link from 'next/link';

export default function Emergency() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dépannage d'urgence
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Besoin d'une intervention rapide ? Nous sommes disponibles pour vos urgences dans un rayon de <strong>35 km autour de Montpellier</strong>.
          </p>

          {/* Phone Number */}
          <div className="mb-8">
            <a
              href="tel:+33612345678"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-primary hover:text-primary-light transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              06 12 34 56 78
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            DEMANDER UNE INTERVENTION
          </Link>
        </div>
      </div>
    </section>
  );
}
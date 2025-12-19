export default function SeoContentQuiSommesNous() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bloc 1 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Une entreprise de peinture à taille humaine
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Créée en 2010, <strong>Haut en Couleur</strong> est une entreprise de peinture familiale
              basée à Mordelles, près de Rennes. Nous avons bâti notre réputation sur la qualité de notre
              travail, notre écoute et notre proximité avec nos clients.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Notre philosophie est simple : offrir un service de <strong>peinture professionnel</strong> avec
              un accompagnement personnalisé du début à la fin de votre projet. Chaque chantier est unique,
              et nous nous adaptons à vos besoins spécifiques.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Que ce soit pour des <strong>travaux de peinture intérieure</strong>, de <strong>peinture extérieure</strong>,
              de <strong>ravalement de façade</strong> ou la pose d&apos;<strong>enduits décoratifs</strong>,
              nous mettons tout notre savoir-faire à votre service.
            </p>
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Notre engagement qualité
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <strong className="block mb-1">Peintre qualifié et expérimenté</strong>
                  <span className="text-sm">Plus de 10 ans d&apos;expérience dans le domaine de la peinture en bâtiment</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <strong className="block mb-1">Respect de l&apos;environnement</strong>
                  <span className="text-sm">Utilisation de peintures écologiques et respectueuses de votre santé</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <strong className="block mb-1">Garantie de nos travaux</strong>
                  <span className="text-sm">Nous garantissons la qualité et la durabilité de nos réalisations</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <strong className="block mb-1">Conseils personnalisés</strong>
                  <span className="text-sm">Aide au choix des couleurs, des finitions et des matériaux adaptés à votre projet</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
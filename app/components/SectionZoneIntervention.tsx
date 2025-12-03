export default function ServiceArea() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Zone d'intervention
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Haut en Couleur</strong> intervient dans toute la région de Montpellier et ses environs.
              </p>
              <p>
                Notre zone de couverture s'étend sur un rayon de <strong>35 kilomètres autour de Montpellier</strong>, incluant notamment :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Montpellier et son agglomération</li>
                <li>Castelnau-le-Lez</li>
                <li>Lattes</li>
                <li>Pérols</li>
                <li>Palavas-les-Flots</li>
                <li>Saint-Jean-de-Védas</li>
                <li>Juvignac</li>
                <li>Et bien d'autres communes</li>
              </ul>
              <p className="mt-6 p-4 bg-orange-50 border-l-4 border-primary rounded">
                <strong>Besoin d'un devis ?</strong> Contactez-nous pour vérifier que votre localisation fait partie de notre zone d'intervention.
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              {/* Map Icon */}
              <div className="text-center">
                <svg className="w-24 h-24 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div className="text-gray-600">
                  <p className="text-xl font-semibold mb-2">Montpellier</p>
                  <p className="text-sm">Rayon d'intervention : 35 km</p>
                </div>
              </div>
            </div>

            {/* Circle overlay to show radius */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 border-4 border-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute w-48 h-48 border-4 border-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute w-32 h-32 border-4 border-primary/70 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
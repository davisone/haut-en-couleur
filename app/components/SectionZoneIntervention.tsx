'use client';

import dynamic from 'next/dynamic';

// Import dynamique pour éviter les erreurs SSR avec Leaflet
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-200 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Chargement de la carte...</p>
      </div>
    </div>
  )
});

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
                <strong>Haut en Couleur</strong> intervient dans toute la région de Rennes et ses environs.
              </p>
              <p>
                Notre zone de couverture s'étend sur un rayon de <strong>35 kilomètres autour de Mordelles</strong>, incluant notamment :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chavagne</li>
                <li>Bréal-sous-Montfort</li>
                <li>Le Rheu</li>
                <li>Bruz</li>
                <li>Cintré</li>
                <li>L'Hermitage</li>
                <li>Saint Malo</li>
                <li>Et bien d'autres communes</li>
              </ul>
              <p className="mt-6 p-4 bg-orange-50 border-l-4 border-primary rounded">
                <strong>Besoin d'un devis ?</strong> Contactez-nous pour vérifier que votre localisation fait partie de notre zone d'intervention.
              </p>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
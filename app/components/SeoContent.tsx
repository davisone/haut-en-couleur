export default function SeoContent() {
  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bloc 1 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Entreprise de peinture à Rennes et environs
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Haut en Couleur</strong> est votre entreprise de peinture de confiance basée à Mordelles,
              intervenant dans toute la région de Rennes et l&apos;Ille-et-Vilaine. Spécialisés dans la
              <strong> peinture intérieure</strong>, l&apos;<strong>enduit</strong>,
              la <strong>pose de papier peint</strong> et le <strong>revêtement de sol</strong>,
              nous mettons notre expertise au service de vos projets de rénovation et de décoration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Que vous soyez un particulier ou un professionnel, nous vous accompagnons de A à Z
              dans la réalisation de vos travaux de peinture. Notre engagement : un travail soigné,
              des délais respectés et des finitions impeccables.
            </p>
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pourquoi choisir Haut en Couleur ?
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span><strong>Expertise locale :</strong> Une connaissance parfaite du marché rennais et des spécificités climatiques de la Bretagne</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span><strong>Matériaux de qualité :</strong> Nous utilisons exclusivement des peintures et enduits de marques reconnues pour leur durabilité</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span><strong>Devis gratuit :</strong> Une estimation précise et détaillée de vos travaux sans engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span><strong>Proximité et réactivité :</strong> Une équipe à votre écoute, disponible et réactive pour répondre à vos besoins</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bloc zones d'intervention */}
        <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Zones d&apos;intervention
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Nous intervenons dans toute l&apos;agglomération rennaise et les communes environnantes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
            <div className="p-3 bg-gray-50 rounded-lg">Rennes</div>
            <div className="p-3 bg-gray-50 rounded-lg">Mordelles</div>
            <div className="p-3 bg-gray-50 rounded-lg">Bruz</div>
            <div className="p-3 bg-gray-50 rounded-lg">Cesson-Sévigné</div>
            <div className="p-3 bg-gray-50 rounded-lg">Vezin-le-Coquet</div>
            <div className="p-3 bg-gray-50 rounded-lg">Saint-Grégoire</div>
            <div className="p-3 bg-gray-50 rounded-lg">Pacé</div>
            <div className="p-3 bg-gray-50 rounded-lg">Betton</div>
            <div className="p-3 bg-gray-50 rounded-lg">Chantepie</div>
            <div className="p-3 bg-gray-50 rounded-lg">Thorigné-Fouillard</div>
            <div className="p-3 bg-gray-50 rounded-lg">Le Rheu</div>
            <div className="p-3 bg-gray-50 rounded-lg">Chartres-de-Bretagne</div>
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            Et bien d&apos;autres communes en Ille-et-Vilaine (35)
          </p>
        </div>
      </div>
    </section>
  );
}
export default function SeoContentRealisations() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bloc 1 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Des réalisations de peinture sur mesure à Rennes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Découvrez nos <strong>réalisations de peinture</strong> dans toute la région rennaise.
              Chaque projet est unique et reflète la personnalité et les besoins de nos clients.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Que ce soit pour la <strong>rénovation d&apos;une maison</strong>, la <strong>peinture d&apos;un appartement</strong>,
              le <strong>ravalement d&apos;une façade</strong> ou la <strong>décoration de bureaux professionnels</strong>,
              nous apportons le même soin et la même attention aux détails.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nos travaux de <strong>peinture intérieure et extérieure</strong> témoignent de notre expertise
              et de notre engagement à offrir des finitions parfaites. Parcourez notre galerie pour vous
              inspirer et imaginer ce que nous pourrions réaliser pour vous.
            </p>
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Types de projets réalisés
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Peinture de maisons et appartements</h3>
                <p className="text-gray-600 text-sm">
                  Chambres, salons, cuisines, salles de bain - Nous transformons tous vos espaces intérieurs
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Ravalement de façades</h3>
                <p className="text-gray-600 text-sm">
                  Protection et embellissement de vos murs extérieurs avec des techniques professionnelles
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Locaux professionnels</h3>
                <p className="text-gray-600 text-sm">
                  Bureaux, commerces, restaurants - Des réalisations adaptées à votre activité
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Enduits décoratifs</h3>
                <p className="text-gray-600 text-sm">
                  Créations de textures et finitions personnalisées pour un rendu unique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
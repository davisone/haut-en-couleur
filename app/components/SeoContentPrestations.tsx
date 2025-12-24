export default function SeoContentPrestations() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bloc 1 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Vos travaux de peinture à Rennes en toute confiance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Haut en Couleur</strong> est votre <strong>entreprise de peinture à Rennes</strong> pour
              tous vos projets de <strong>peinture intérieure</strong>, <strong>enduit</strong>,
              <strong>pose de papier peint</strong> et <strong>revêtement de sol</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Que vous souhaitiez <strong>rafraîchir votre intérieur</strong>, <strong>poser du papier peint</strong>
              ou <strong>rénover votre sol</strong>, notre peintre professionnel
              met son expertise à votre service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Basés à <strong>Mordelles</strong>, nous intervenons dans toute la région de <strong>Rennes</strong>
              et ses environs pour des <strong>travaux de peinture de qualité</strong>, réalisés dans le respect
              des normes et de vos attentes.
            </p>
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nos prestations de peinture
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-gray-800 mb-2">Peinture intérieure à Rennes</h3>
                <p className="text-gray-600 text-sm">
                  Murs, plafonds, boiseries - Nous peignons tous vos espaces intérieurs avec soin.
                  Choix des couleurs, conseils déco et finitions impeccables.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cameleon-blue">
                <h3 className="font-bold text-gray-800 mb-2">Enduit à Rennes</h3>
                <p className="text-gray-600 text-sm">
                  Application d'enduit de lissage, rebouchage et préparation des surfaces.
                  Pour une finition parfaite avant peinture.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cameleon-emerald">
                <h3 className="font-bold text-gray-800 mb-2">Pose de papier peint</h3>
                <p className="text-gray-600 text-sm">
                  Pose professionnelle de papier peint intissé, vinyle et panoramique.
                  Raccords parfaits et finitions soignées.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cameleon-yellow">
                <h3 className="font-bold text-gray-800 mb-2">Revêtement de sol</h3>
                <p className="text-gray-600 text-sm">
                  Pose de lino, PVC, moquette pour tous vos espaces.
                  Préparation du support et pose professionnelle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloc processus */}
        <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Notre processus de travail
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Visite gratuite</h3>
              <p className="text-gray-600 text-sm">
                Nous venons chez vous pour évaluer vos besoins et prendre les mesures
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Devis détaillé</h3>
              <p className="text-gray-600 text-sm">
                Proposition claire avec détails des travaux et tarifs transparents
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Réalisation</h3>
              <p className="text-gray-600 text-sm">
                Travaux de peinture professionnels avec protection des lieux et nettoyage
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Finitions</h3>
              <p className="text-gray-600 text-sm">
                Contrôle qualité et retouches si nécessaire pour votre satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Bloc avantages */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Pourquoi faire appel à un peintre professionnel ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">Gain de temps</h3>
              <p className="text-gray-600 text-sm">
                Nos peintres professionnels réalisent vos travaux rapidement et efficacement,
                vous permettant de profiter rapidement de votre nouvel espace.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">Résultat parfait</h3>
              <p className="text-gray-600 text-sm">
                Techniques professionnelles, matériel adapté et savoir-faire garantissent
                des finitions impeccables et durables.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">Conseils d&apos;expert</h3>
              <p className="text-gray-600 text-sm">
                Aide au choix des couleurs, des finitions et des produits adaptés à votre projet
                et à votre budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
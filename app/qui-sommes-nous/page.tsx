import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionEntreprise from '../components/SectionEntreprise';

export const metadata = {
  title: "Qui sommes-nous ? - Haut en Couleur",
  description: "Découvrez l'entreprise Haut en Couleur, spécialiste en peinture à Rennes. Notre expertise et notre savoir-faire à votre service.",
};

export default function QuiSommesNous() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Qui sommes-nous ?"
          subtitle="Découvrez l'histoire et les valeurs de Haut en Couleur"
          backgroundImage="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070"
        />
        <SectionEntreprise />

        {/* Section supplémentaire - Notre équipe */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Notre équipe
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Notre équipe est composée de <strong>peintres professionnels qualifiés</strong> et passionnés par leur métier.
              </p>
              <p>
                Chaque membre de notre équipe possède plusieurs années d'expérience dans le domaine de la peinture en bâtiment et suit régulièrement des formations pour rester à jour avec les dernières techniques et innovations du secteur.
              </p>
              <p>
                Nous sommes fiers de notre savoir-faire et nous nous engageons à vous offrir un service de qualité supérieure pour tous vos projets de peinture.
              </p>
            </div>
          </div>
        </section>

        {/* Section - Nos valeurs */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Nos valeurs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Qualité */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Qualité</h3>
                <p className="text-gray-600 text-center">
                  Nous utilisons uniquement des matériaux de première qualité et appliquons les meilleures techniques pour un résultat durable.
                </p>
              </div>

              {/* Écoute */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Écoute</h3>
                <p className="text-gray-600 text-center">
                  Nous prenons le temps d'écouter vos besoins et vos attentes pour vous proposer des solutions adaptées à votre projet.
                </p>
              </div>

              {/* Réactivité */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Réactivité</h3>
                <p className="text-gray-600 text-center">
                  Nous nous engageons à respecter les délais convenus et à intervenir rapidement en cas d'urgence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Image from 'next/image';
import Link from 'next/link';

export default function OurCompany() {
  return (
    <section id="qui-sommes-nous" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              NOTRE ENTREPRISE
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Basée à <strong>Mordelles</strong>, l'entreprise <strong>Haut en Couleur</strong> met son savoir-faire au service de vos projets de peinture et de rénovation.
              </p>
              <p>
                Spécialiste des travaux de <strong>peinture intérieure</strong> et <strong>peinture extérieure</strong>, nous intervenons avec professionnalisme sur tous types de chantiers, du particulier aux professionnels.
              </p>
              <p>
                Notre rayon d'intervention s'étend sur <strong>35 km autour de Rennes</strong>, nous permettant de répondre rapidement à vos besoins.
              </p>
              <p>
                Nous nous engageons à fournir un <strong>travail soigné</strong>, une <strong>écoute attentive</strong> de vos attentes, une <strong>réactivité exemplaire</strong> et une <strong>qualité irréprochable</strong> dans chacune de nos réalisations.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:!text-white transition-all duration-300"
              >
                CONTACTER
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/img/entreprise.jpg')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default function SocialMedia() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Restez connectés
          </h2>
          <p className="text-xl text-gray-600">
            Suivez nos actualités et découvrez nos dernières réalisations
          </p>
        </div>

        {/* Facebook Feed */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-top-cameleon-cyan">
          {/*
            IMPORTANT : Pour configurer l'iframe Facebook :
            1. Allez sur https://developers.facebook.com/docs/plugins/page-plugin
            2. Entrez l'URL de votre page Facebook (ex: https://www.facebook.com/VotrePageEntreprise)
            3. Configurez :
               - Afficher les posts : OUI
               - Hauteur : 600px
               - Largeur adaptative : OUI
               - Masquer la photo de couverture : NON
            4. Copiez le code généré et remplacez l'iframe ci-dessous
          */}

          <div className="flex justify-center p-6">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="600"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>

          {/* Bouton vers Facebook */}
          <div className="p-6 bg-gray-50 text-center border-t">
            <a
              href="https://www.facebook.com/VotrePageEntreprise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#1877F2] text-white font-semibold rounded-full hover:bg-[#0C63D4] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Voir notre page Facebook
            </a>
          </div>
        </div>

        {/* Note de configuration */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-sm text-gray-700">
            <strong>📝 Configuration :</strong> Pour afficher vos vraies publications Facebook, rendez-vous sur{' '}
            <a
              href="https://developers.facebook.com/docs/plugins/page-plugin"
              target="_blank"
              rel="noopener"
              className="text-blue-600 hover:underline"
            >
              Facebook Page Plugin
            </a>
            {' '}et générez le code avec l'URL de votre page professionnelle.
          </p>
        </div>
      </div>
    </section>
  );
}
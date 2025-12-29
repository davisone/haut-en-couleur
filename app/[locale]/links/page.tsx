import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Liens - Haut en Couleur",
  description: "Retrouvez tous nos liens : site web, avis Google, réseaux sociaux",
  robots: {
    index: false, // Ne pas indexer cette page dans Google
    follow: false,
  },
};

export default function LinksPage() {
  const links = [
    {
      title: "Notre site web",
      description: "Découvrez nos services et réalisations",
      url: "https://haut-en-couleur.fr",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      color: "bg-primary hover:bg-primary-light",
    },
    {
      title: "Laisser un avis Google",
      description: "Partagez votre expérience avec nous ⭐",
      url: "https://search.google.com/local/writereview?placeid=ChIJBeH-Y0YGoqkRTcKgtiuDuCI",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Facebook",
      description: "Suivez-nous sur Facebook",
      url: "https://www.facebook.com/VOTRE_PAGE_FACEBOOK", // À remplacer par le vrai lien
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header avec logo et infos */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/img/logo2.png"
                alt="Haut en Couleur"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Haut en Couleur
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Peintre en bâtiment à Rennes
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Expertise et qualité pour vos projets de peinture
          </p>
        </div>

        {/* Liens principaux */}
        <div className="space-y-4 mb-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${link.color} text-white rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1 text-left">
                  <h2 className="text-xl font-bold mb-1">{link.title}</h2>
                  <p className="text-white/90 text-sm">{link.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact direct */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 text-center">
            Contactez-nous directement
          </h3>
          <div className="space-y-3">
            <a
              href="tel:+33666284458"
              className="flex items-center justify-center gap-3 text-primary hover:text-primary-light transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="font-semibold">06 66 28 44 58</span>
            </a>
            <a
              href="mailto:contact@haut-en-couleur.fr"
              className="flex items-center justify-center gap-3 text-primary hover:text-primary-light transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="font-semibold">contact@haut-en-couleur.fr</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p className="mb-2">
            Mordelles, Ille-et-Vilaine (35310)
          </p>
          <p className="mb-4">
            Rayon d'intervention : 35 km autour de Rennes
          </p>
          <div className="flex items-center justify-center gap-2 text-xs">
            <span>Propulsé par</span>
            <Link href="/" className="text-primary hover:underline font-semibold">
              Haut en Couleur
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
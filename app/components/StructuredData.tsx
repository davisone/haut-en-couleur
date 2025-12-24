export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://haut-en-couleur.fr/#organization",
    "name": "Haut en Couleur",
    "image": "https://haut-en-couleur.fr/img/logo2.png",
    "description": "Entreprise de peinture en bâtiment à Mordelles, près de Rennes. Spécialisée en peinture intérieure, enduit, pose de papier peint et revêtement de sol.",
    "url": "https://haut-en-couleur.fr",
    "telephone": "+33666284458",
    "email": "contact@haut-en-couleur.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mordelles",
      "addressLocality": "Mordelles",
      "addressRegion": "Bretagne",
      "postalCode": "35310",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.0667,
      "longitude": -1.8333
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 48.0667,
        "longitude": -1.8333
      },
      "geoRadius": "35000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "€€",
    "serviceType": [
      "Peinture intérieure",
      "Enduit",
      "Pose de papier peint",
      "Revêtement de sol",
      "Peinture de boiseries",
      "Finitions décoratives"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de peinture",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Peinture intérieure",
            "description": "Application professionnelle de peinture sur tous types de supports : murs, plafonds, boiseries."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enduit",
            "description": "Application d'enduit de lissage, rebouchage et préparation des surfaces pour une finition parfaite avant peinture."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pose de papier peint",
            "description": "Pose professionnelle de papier peint intissé, vinyle et panoramique. Préparation des murs et raccords parfaits."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Revêtement de sol",
            "description": "Pose de revêtements de sol : lino, PVC, moquette. Préparation du support et finitions impeccables."
          }
        }
      ]
    },
    // Note: Les données aggregateRating seront automatiquement récupérées par Google
    // depuis vos avis Google Business Profile. Pas besoin de les mettre ici en dur.

    // ========================================
    // RÉSEAUX SOCIAUX - À ACTIVER PLUS TARD
    // ========================================
    // Décommentez la section ci-dessous quand vous aurez créé vos pages sociales
    // et remplacez les URLs par vos vraies pages :
    /*
    "sameAs": [
      "https://www.facebook.com/VOTRE_PAGE_FACEBOOK",
      // "https://www.instagram.com/VOTRE_COMPTE_INSTAGRAM"  // Si vous créez un compte Instagram
    ]
    */
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
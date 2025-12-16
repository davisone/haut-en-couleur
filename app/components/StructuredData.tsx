export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://votre-domaine.fr/#organization",
    "name": "Haut en Couleur",
    "image": "https://votre-domaine.fr/img/logo.jpg",
    "description": "Entreprise de peinture en bâtiment à Mordelles, près de Rennes. Spécialisée en peinture intérieure, extérieure, ravalement de façade et enduits décoratifs.",
    "url": "https://votre-domaine.fr",
    "telephone": "+33666284458",
    "email": "sandrinedavison@hotmail.fr",
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
      "Peinture extérieure",
      "Ravalement de façade",
      "Enduits décoratifs",
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
            "name": "Peinture extérieure",
            "description": "Protection et embellissement de vos façades avec des peintures résistantes aux intempéries."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ravalement de façade",
            "description": "Rénovation complète de vos façades : nettoyage, réparation, enduit et peinture."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enduits décoratifs",
            "description": "Béton ciré, stucco vénitien, tadelakt et enduits à la chaux pour des finitions uniques."
          }
        }
      ]
    },
    // Note: Les données aggregateRating seront automatiquement récupérées par Google
    // depuis vos avis Google Business Profile. Pas besoin de les mettre ici en dur.
    "sameAs": [
      "https://www.facebook.com/votre-page",
      "https://www.instagram.com/votre-compte"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
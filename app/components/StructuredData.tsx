import { getTranslations } from 'next-intl/server';

export default async function StructuredData() {
  const t = await getTranslations('StructuredData');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://haut-en-couleur.fr/#organization",
    "name": "Haut en Couleur",
    "image": "https://haut-en-couleur.fr/img/logo2.png",
    "description": t('description'),
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
      t('service1'),
      t('service2'),
      t('service3'),
      t('service4'),
      t('service5'),
      t('service6')
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": t('catalogName'),
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('service1'),
            "description": t('service1Desc')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('service2'),
            "description": t('service2Desc')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('service3'),
            "description": t('service3Desc')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('service4'),
            "description": t('service4Desc')
          }
        }
      ]
    },
    // Note: aggregateRating data will be automatically retrieved by Google
    // from your Google Business Profile reviews. No need to hardcode it here.

    // Liens vers profils sociaux et Google Business
    "sameAs": [
      "https://www.google.com/maps/place/?q=place_id:ChIJBeH-Y0YGoqkRTcKgtiuDuCI",
      // "https://www.facebook.com/YOUR_FACEBOOK_PAGE",  // À activer quand la page sera créée
      // "https://www.instagram.com/YOUR_INSTAGRAM_ACCOUNT"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
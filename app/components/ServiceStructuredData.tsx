
interface ServiceStructuredDataProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  locale: string;
}

export default async function ServiceStructuredData({
  serviceName,
  serviceDescription,
  serviceUrl,
  locale
}: ServiceStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": `https://haut-en-couleur.fr${serviceUrl}`,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://haut-en-couleur.fr/#organization",
      "name": "Haut en Couleur",
      "image": "https://haut-en-couleur.fr/img/logo2.png",
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
      }
    },
    "serviceType": serviceName,
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 48.0667,
        "longitude": -1.8333
      },
      "geoRadius": "35000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "15"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://haut-en-couleur.fr/${locale}/contact`,
      "servicePhone": "+33666284458"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Vérifier le consentement cookies
    const consent = localStorage.getItem('cookie_consent');

    if (consent === 'accepted' && GA_MEASUREMENT_ID && window.gtag) {
      // Initialiser Google Analytics avec les bonnes options RGPD
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied', // Pas de publicité, respecte la vie privée
      });

      window.gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true, // Anonymiser les IPs (RGPD)
        cookie_flags: 'SameSite=None;Secure',
      });
    } else if (window.gtag) {
      // Bloquer Analytics si refusé
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  }, [GA_MEASUREMENT_ID]);

  // Ne charger le script que si on a un ID de mesure
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Script Google Tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      {/* Initialisation gtag avec consentement par défaut refusé (RGPD) */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Consentement par défaut : refusé (RGPD)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500
            });
          `,
        }}
      />
    </>
  );
}
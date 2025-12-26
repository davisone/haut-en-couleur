'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function CookieBanner() {
  const t = useTranslations('CookieBanner');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Afficher la bannière après un court délai pour une meilleure UX
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setShowBanner(false);

    // Mettre à jour le consentement Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
      });

      // Recharger GA avec la config
      const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      if (gaId) {
        window.gtag('config', gaId, {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure',
        });
      }
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gray-900 text-white shadow-2xl border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Message */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm sm:text-base leading-relaxed">
                {t('message')}
                {' '}
                <Link
                  href="/cookies"
                  className="text-primary hover:text-primary-light underline font-medium"
                >
                  {t('learnMore')}
                </Link>
              </p>
            </div>

            {/* Boutons */}
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-2.5 text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200"
              >
                {t('decline')}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-all duration-200 shadow-lg"
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
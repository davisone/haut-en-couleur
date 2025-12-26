import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n';

export default createMiddleware({
  // Liste des langues supportées
  locales,

  // Langue par défaut
  defaultLocale,

  // Préfixe de locale dans l'URL pour toutes les langues (y compris la langue par défaut)
  localePrefix: 'always',

  // Désactiver la détection automatique de la langue du navigateur
  localeDetection: false
});

export const config = {
  // Matcher pour exclure les fichiers qui ne doivent pas être traités par le middleware
  matcher: [
    // Inclure toutes les routes sauf :
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
};
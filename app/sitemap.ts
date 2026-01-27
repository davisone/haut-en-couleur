import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://haut-en-couleur.fr';
  const locales = ['fr', 'en'] as const;

  // Définir toutes les pages avec leurs paramètres
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/qui-sommes-nous', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/prestations', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/prestations/peinture-interieure', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/prestations/enduit', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/prestations/papier-peint', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/prestations/revetement-sol', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/realisations', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // Générer les URLs pour chaque locale
  const sitemapEntries = locales.flatMap(locale =>
    pages.map(page => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      // Prioriser légèrement les pages françaises
      priority: locale === 'fr' ? page.priority : page.priority * 0.95,
    }))
  );

  return sitemapEntries;
}
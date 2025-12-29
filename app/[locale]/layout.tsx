import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import StructuredData from '@/app/components/StructuredData';
import CookieBanner from '@/app/components/CookieBanner';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';
import ScrollToTop from '@/app/components/ScrollToTop';
import ThemeProvider from '@/app/components/ThemeProvider';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n';

// Générer les params statiques pour les locales
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export async function generateMetadata(props: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const params = await props.params;
  const {locale} = params;

  return {
    title: {
      template: "%s - Haut en Couleur",
      default: "Haut en Couleur - Peintre à Rennes"
    },
    description: "Entreprise de peinture à Mordelles, près de Rennes. Spécialiste en peinture intérieure, enduit, papier peint et revêtement de sol. Intervention dans un rayon de 35 km.",
    keywords: ["peintre", "peinture", "Rennes", "Mordelles", "Ille-et-Vilaine", "bâtiment", "intérieur", "enduit", "papier peint", "revêtement sol"],
    authors: [{ name: "Haut en Couleur" }],
    metadataBase: new URL('https://haut-en-couleur.fr'),
    openGraph: {
      title: "Haut en Couleur - Peintre à Rennes",
      description: "Expertise et qualité pour vos projets de peinture à Mordelles et alentours",
      type: "website",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      images: [
        {
          url: '/img/logo2.png',
          width: 1200,
          height: 630,
          alt: 'Haut en Couleur - Logo',
        },
      ],
    },
    icons: {
      icon: '/icon.png',
      apple: '/apple-icon.png',
    },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Await params pour Next.js 16+
  const params = await props.params;
  const {locale} = params;
  const {children} = props;

  // Valider la locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Charger les messages via next-intl (utilise i18n/request.ts)
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <StructuredData />
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {/* Skip link pour l'accessibilité */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Aller au contenu principal
            </a>
            {children}
            <CookieBanner />
            <ScrollToTop />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
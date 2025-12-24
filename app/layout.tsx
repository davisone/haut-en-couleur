import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import CookieBanner from "./components/CookieBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ScrollToTop from "./components/ScrollToTop";

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
  preload: false, // Désactiver le préchargement de la police mono si non utilisée
});

export const metadata: Metadata = {
  title: {
    template: "%s - Haut en Couleur",
    default: "Haut en Couleur - Peintre à Rennes"
  },
  description: "Entreprise de peinture à Mordelles, près de Rennes. Spécialiste en peinture intérieure et extérieure et enduits décoratifs. Intervention dans un rayon de 35 km.",
  keywords: ["peintre", "peinture", "Rennes", "Mordelles", "Ille-et-Vilaine", "bâtiment", "intérieur", "extérieur", "enduits décoratifs"],
  authors: [{ name: "Haut en Couleur" }],
  openGraph: {
    title: "Haut en Couleur - Peintre à Rennes",
    description: "Expertise et qualité pour vos projets de peinture à Mordelles et alentours",
    type: "website",
    locale: "fr_FR",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
      </body>
    </html>
  );
}

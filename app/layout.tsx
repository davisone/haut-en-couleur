import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Haut en Couleur",
    default: "Haut en Couleur - Peintre à Rennes"
  },
  description: "Entreprise de peinture à Mordelles, près de Rennes. Spécialiste en peinture intérieure et extérieure, ravalement de façade et enduits décoratifs. Intervention dans un rayon de 35 km.",
  keywords: ["peintre", "peinture", "Rennes", "Mordelles", "Ille-et-Vilaine", "bâtiment", "ravalement", "façade", "intérieur", "extérieur"],
  authors: [{ name: "Haut en Couleur" }],
  openGraph: {
    title: "Haut en Couleur - Peintre à Rennes",
    description: "Expertise et qualité pour vos projets de peinture à Mordelles et alentours",
    type: "website",
    locale: "fr_FR",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

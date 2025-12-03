import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haut en Couleur - Peintre en bâtiment à Montpellier",
  description: "Entreprise de peinture à Montpellier. Spécialiste en peinture intérieure et extérieure, ravalement de façade et enduits décoratifs. Intervention dans un rayon de 35 km.",
  keywords: ["peintre", "peinture", "Montpellier", "bâtiment", "ravalement", "façade", "intérieur", "extérieur"],
  authors: [{ name: "Haut en Couleur" }],
  openGraph: {
    title: "Haut en Couleur - Peintre en bâtiment à Montpellier",
    description: "Expertise et qualité pour vos projets de peinture",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

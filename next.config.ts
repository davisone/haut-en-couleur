import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Domaines externes autorisés pour les images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/**',
      },
    ],
    // Formats d'images optimisés
    formats: ['image/webp', 'image/avif'],
    // Tailles d'images responsives pré-générées
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        // Appliquer les en-têtes de sécurité à toutes les routes
        source: '/:path*',
        headers: [
          // Content Security Policy - Protection contre XSS et injection de code
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://hcaptcha.com https://*.hcaptcha.com https://unpkg.com https://www.googletagmanager.com", // hCaptcha + Leaflet + Google Analytics
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com https://cdn.jsdelivr.net", // Tailwind inline + Google Fonts + Leaflet
              "img-src 'self' data: https: blob:", // Images (Unsplash, maps, Google profile photos, etc.)
              "font-src 'self' https://fonts.gstatic.com data:",
              "connect-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://*.tile.openstreetmap.org https://www.google-analytics.com https://maps.googleapis.com https://www.googletagmanager.com", // API calls + hCaptcha + Leaflet + Google Analytics + Google Maps API
              "frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com",
              "worker-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          // Protection contre le clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Empêche le MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Protection XSS intégrée au navigateur (legacy, mais utile)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Contrôle des informations de référence
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Permissions des fonctionnalités du navigateur
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'interest-cohort=()'
            ].join(', ')
          },
          // Force HTTPS (en production uniquement via platforme de déploiement)
          // Note: HSTS sera configuré automatiquement par Vercel/Netlify
        ],
      },
    ];
  },
};

export default nextConfig;

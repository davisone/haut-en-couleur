import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://hcaptcha.com https://*.hcaptcha.com https://unpkg.com", // hCaptcha + Leaflet
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com", // Tailwind inline + Google Fonts + Leaflet
              "img-src 'self' data: https: blob:", // Images (Unsplash temporaire, maps, etc.)
              "font-src 'self' https://fonts.gstatic.com data:",
              "connect-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://*.tile.openstreetmap.org", // API calls + hCaptcha + Leaflet tiles
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

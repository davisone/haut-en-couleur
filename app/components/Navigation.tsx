'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  // Fonction pour vérifier si le lien est actif
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Classes pour les liens actifs
  const getLinkClasses = (path: string) => {
    return isActive(path)
      ? 'text-primary font-semibold transition-colors'
      : 'text-gray-700 hover:text-primary transition-colors font-medium';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/img/logo.png"
                alt="Haut en Couleur"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <span className="text-2xl font-bold text-gray-800">Haut en Couleur</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={getLinkClasses('/')}>
              Accueil
            </Link>
            <Link href="/qui-sommes-nous" className={getLinkClasses('/qui-sommes-nous')}>
              Qui sommes-nous ?
            </Link>
            <Link href="/realisations" className={getLinkClasses('/realisations')}>
              Nos réalisations
            </Link>

            {/* Dropdown Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`${getLinkClasses('/prestations')} flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="desktop-services-menu"
              >
                Nos prestations
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
              {isServicesOpen && (
                <div id="desktop-services-menu" className="absolute top-full left-0 pt-2 w-56" role="menu">
                  <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    <Link
                      href="/prestations/peinture-interieure"
                      className={`block px-4 py-2 transition-colors ${
                        isActive('/prestations/peinture-interieure')
                          ? 'bg-orange-50 text-primary font-semibold'
                          : 'text-gray-700 hover:bg-orange-50 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      Peinture intérieure
                    </Link>
                    <Link
                      href="/prestations/peinture-exterieure"
                      className={`block px-4 py-2 transition-colors ${
                        isActive('/prestations/peinture-exterieure')
                          ? 'bg-orange-50 text-primary font-semibold'
                          : 'text-gray-700 hover:bg-orange-50 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      Peinture extérieure
                    </Link>
                    <Link
                      href="/prestations/enduits-decoratifs"
                      className={`block px-4 py-2 transition-colors ${
                        isActive('/prestations/enduits-decoratifs')
                          ? 'bg-orange-50 text-primary font-semibold'
                          : 'text-gray-700 hover:bg-orange-50 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      Enduits décoratifs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-6 py-2 border-2 border-primary rounded-full transition-colors font-medium bg-white text-primary hover:bg-primary hover:!text-white"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <div className="flex flex-col gap-4" role="menu">
              <Link href="/" className={getLinkClasses('/')} role="menuitem">
                Accueil
              </Link>
              <Link href="/qui-sommes-nous" className={getLinkClasses('/qui-sommes-nous')} role="menuitem">
                Qui sommes-nous ?
              </Link>
              <Link href="/realisations" className={getLinkClasses('/realisations')} role="menuitem">
                Nos réalisations
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`${getLinkClasses('/prestations')} flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1`}
                  aria-expanded={isServicesOpen}
                  aria-controls="mobile-services-menu"
                >
                  Nos prestations
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                {isServicesOpen && (
                  <div id="mobile-services-menu" className="ml-4 mt-2 flex flex-col gap-2" role="menu">
                    <Link
                      href="/prestations/peinture-interieure"
                      className={`transition-colors ${
                        isActive('/prestations/peinture-interieure')
                          ? 'text-primary font-semibold'
                          : 'text-gray-600 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      Peinture intérieure
                    </Link>
                    <Link
                      href="/prestations/peinture-exterieure"
                      className={`transition-colors ${
                        isActive('/prestations/peinture-exterieure')
                          ? 'text-primary font-semibold'
                          : 'text-gray-600 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      Peinture extérieure
                    </Link>
                    <Link
                      href="/prestations/enduits-decoratifs"
                      className={`transition-colors ${
                        isActive('/prestations/enduits-decoratifs')
                          ? 'text-primary font-semibold'
                          : 'text-gray-600 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      Enduits décoratifs
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="px-6 py-2 border-2 border-primary rounded-full transition-colors font-medium text-center bg-white text-primary hover:bg-primary hover:!text-white"
                role="menuitem"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
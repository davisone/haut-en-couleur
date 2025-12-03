'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#d86a0c'}}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-800">Haut en Couleur</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/qui-sommes-nous" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Qui sommes-nous ?
            </Link>
            <Link href="/realisations" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Nos réalisations
            </Link>

            {/* Dropdown Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/prestations" className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
                Nos prestations
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </Link>
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    <Link href="/prestations/peinture-interieure" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors">
                      Peinture intérieure
                    </Link>
                    <Link href="/prestations/peinture-exterieure" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors">
                      Peinture extérieure
                    </Link>
                    <Link href="/prestations/ravalement-facade" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors">
                      Ravalement de façade
                    </Link>
                    <Link href="/prestations/enduits-decoratifs" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors">
                      Enduits décoratifs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-medium"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Accueil
              </Link>
              <Link href="/qui-sommes-nous" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Qui sommes-nous ?
              </Link>
              <Link href="/realisations" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Nos réalisations
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1"
                >
                  Nos prestations
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link href="/prestations/peinture-interieure" className="text-gray-600 hover:text-primary transition-colors">
                      Peinture intérieure
                    </Link>
                    <Link href="/prestations/peinture-exterieure" className="text-gray-600 hover:text-primary transition-colors">
                      Peinture extérieure
                    </Link>
                    <Link href="/prestations/ravalement-facade" className="text-gray-600 hover:text-primary transition-colors">
                      Ravalement de façade
                    </Link>
                    <Link href="/prestations/enduits-decoratifs" className="text-gray-600 hover:text-primary transition-colors">
                      Enduits décoratifs
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-medium text-center"
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
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {useTranslations, useLocale} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('Navigation');
  const locale = useLocale();

  // Fonction pour créer des liens avec la locale
  const localePath = (path: string) => `/${locale}${path}`;

  // Fonction pour vérifier si le lien est actif
  const isActive = (path: string) => {
    const fullPath = localePath(path);
    if (path === '/') {
      return pathname === fullPath;
    }
    return pathname.startsWith(fullPath);
  };

  // Classes pour les liens actifs
  const getLinkClasses = (path: string) => {
    return isActive(path)
      ? 'text-primary font-semibold transition-colors'
      : 'text-gray-700 dark:text-gray-200 hover:text-primary transition-colors font-medium';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={localePath('/')} className="flex items-center gap-3">
              <Image
                src="/img/logo2.png"
                alt="Haut en Couleur"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href={localePath('/')} className={getLinkClasses('/')}>
              {t('home')}
            </Link>
            <Link href={localePath('/qui-sommes-nous')} className={getLinkClasses('/qui-sommes-nous')}>
              {t('about')}
            </Link>
            <Link href={localePath('/realisations')} className={getLinkClasses('/realisations')}>
              {t('achievements')}
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
                {t('services')}
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
              {isServicesOpen && (
                <div id="desktop-services-menu" className="absolute top-full left-0 pt-2 w-56" role="menu">
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg py-2 border border-gray-100 dark:border-gray-600">
                    <Link
                      href={localePath('/prestations/peinture-interieure')}
                      className={`block px-4 py-2 transition-colors ${
                        isActive('/prestations/peinture-interieure')
                          ? 'bg-orange-50 dark:bg-orange-900 text-primary font-semibold'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      {t('interiorPainting')}
                    </Link>
                    <Link
                      href={localePath('/prestations/enduit')}
                      className={`block px-4 py-2 transition-colors ${
                        isActive('/prestations/enduit')
                          ? 'bg-orange-50 dark:bg-orange-900 text-primary font-semibold'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      {t('coating')}
                    </Link>
                    <Link
                      href={localePath('/prestations/papier-peint')}
                      className={`block px-4 py-2 transition-colors ${
                        isActive('/prestations/papier-peint')
                          ? 'bg-orange-50 dark:bg-orange-900 text-primary font-semibold'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      {t('wallpaper')}
                    </Link>
                    <Link
                      href={localePath('/prestations/revetement-sol')}
                      className={`block px-4 py-2 transition-colors ${
                        isActive('/prestations/revetement-sol')
                          ? 'bg-orange-50 dark:bg-orange-900 text-primary font-semibold'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      {t('flooring')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sélecteur de langue */}
            <LocaleSwitcher />

            {/* Sélecteur de thème */}
            <ThemeSwitcher />

            <Link
              href={localePath('/contact')}
              className="px-6 py-2 border-2 border-primary rounded-full transition-colors font-medium bg-white dark:bg-gray-800 text-primary hover:bg-primary hover:!text-white"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
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
              <Link href={localePath('/')} className={getLinkClasses('/')} role="menuitem">
                {t('home')}
              </Link>
              <Link href={localePath('/qui-sommes-nous')} className={getLinkClasses('/qui-sommes-nous')} role="menuitem">
                {t('about')}
              </Link>
              <Link href={localePath('/realisations')} className={getLinkClasses('/realisations')} role="menuitem">
                {t('achievements')}
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`${getLinkClasses('/prestations')} flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1`}
                  aria-expanded={isServicesOpen}
                  aria-controls="mobile-services-menu"
                >
                  {t('services')}
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                {isServicesOpen && (
                  <div id="mobile-services-menu" className="ml-4 mt-2 flex flex-col gap-2" role="menu">
                    <Link
                      href={localePath('/prestations/peinture-interieure')}
                      className={`transition-colors ${
                        isActive('/prestations/peinture-interieure')
                          ? 'text-primary font-semibold'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      {t('interiorPainting')}
                    </Link>
                    <Link
                      href={localePath('/prestations/enduit')}
                      className={`transition-colors ${
                        isActive('/prestations/enduit')
                          ? 'text-primary font-semibold'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      {t('coating')}
                    </Link>
                    <Link
                      href={localePath('/prestations/papier-peint')}
                      className={`transition-colors ${
                        isActive('/prestations/papier-peint')
                          ? 'text-primary font-semibold'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      {t('wallpaper')}
                    </Link>
                    <Link
                      href={localePath('/prestations/revetement-sol')}
                      className={`transition-colors ${
                        isActive('/prestations/revetement-sol')
                          ? 'text-primary font-semibold'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      {t('flooring')}
                    </Link>
                  </div>
                )}
              </div>

              {/* Sélecteurs de langue et thème mobile */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-4">
                <LocaleSwitcher />
                <ThemeSwitcher />
              </div>

              <Link
                href={localePath('/contact')}
                className="px-6 py-2 border-2 border-primary rounded-full transition-colors font-medium text-center bg-white dark:bg-gray-800 text-primary hover:bg-primary hover:!text-white"
                role="menuitem"
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
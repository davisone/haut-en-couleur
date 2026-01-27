'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

const FrenchFlag = () => (
  <svg width="20" height="15" viewBox="0 0 3 2" className="rounded-sm">
    <rect width="1" height="2" x="0" fill="#002654" />
    <rect width="1" height="2" x="1" fill="#FFFFFF" />
    <rect width="1" height="2" x="2" fill="#CE1126" />
  </svg>
);

const BritishFlag = () => (
  <svg width="20" height="15" viewBox="0 0 60 30" className="rounded-sm">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('LocaleSwitcher');

  const switchLocale = (newLocale: string) => {
    // Replace the locale in the current pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const getFlag = (loc: string) => {
    return loc === 'fr' ? <FrenchFlag /> : <BritishFlag />;
  };

  const getLabel = (loc: string) => {
    return loc === 'fr' ? t('french') : t('english');
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2 ${
            locale === loc
              ? 'bg-primary text-white shadow-md scale-105'
              : 'text-gray-700 bg-gray-50 hover:bg-gray-100 hover:scale-105'
          }`}
          aria-label={`${t('switchTo')} ${getLabel(loc)}`}
          title={getLabel(loc)}
        >
          {getFlag(loc)}
          <span className="hidden sm:inline">{loc.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
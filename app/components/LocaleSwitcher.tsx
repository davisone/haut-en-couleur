'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

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
    return loc === 'fr' ? '🇫🇷' : '🇬🇧';
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
          <span className="text-lg">{getFlag(loc)}</span>
          <span className="hidden sm:inline">{loc.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
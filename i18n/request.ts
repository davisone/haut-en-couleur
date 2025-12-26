import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from '../i18n';

export default getRequestConfig(async ({requestLocale}) => {
  // Wait for the locale to be resolved
  let locale = await requestLocale;

  // Valider que la locale existe
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
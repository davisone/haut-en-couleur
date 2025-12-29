import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return {
    title: `${t('heroTitle')} - Haut en Couleur`,
    description: t('heroSubtitle'),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'fr': '/fr/contact',
        'en': '/en/contact',
        'x-default': '/fr/contact',
      },
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
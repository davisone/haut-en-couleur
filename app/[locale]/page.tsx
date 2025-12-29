import Navigation from '@/app/components/Navigation';
import SectionHero from '@/app/components/SectionHero';
import SectionEntreprise from '@/app/components/SectionEntreprise';
import CounterStats from '@/app/components/CounterStats';
import SectionServices from '@/app/components/SectionServices';
import GoogleReviews from '@/app/components/GoogleReviews';
import SectionZoneIntervention from '@/app/components/SectionZoneIntervention';
// import SectionReseauxSociaux from '@/app/components/SectionReseauxSociaux'; // DÉSACTIVÉ - À réactiver quand vous aurez vos pages sociales
import SeoContent from '@/app/components/SeoContent';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Peintre Rennes, Mordelles - Peinture Bâtiment Ille-et-Vilaine (35)',
    description: 'Entreprise de peinture à Rennes et Mordelles. Peinture intérieure, enduit, papier peint, revêtement sol. Intervention 35 km autour de Rennes en Ille-et-Vilaine. Devis gratuit.',
    keywords: ['peintre Rennes', 'peinture Mordelles', 'peintre Ille-et-Vilaine', 'peinture 35', 'peintre bâtiment Rennes', 'entreprise peinture Rennes'],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'fr': '/fr',
        'en': '/en',
        'x-default': '/fr',
      },
    },
    openGraph: {
      title: 'Haut en Couleur - Peintre à Rennes et Mordelles',
      description: 'Votre entreprise de peinture en Ille-et-Vilaine. Intervention rapide à Rennes et dans un rayon de 35 km.',
      url: `/${locale}`,
      siteName: 'Haut en Couleur',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <SectionHero />
        <SectionEntreprise />
        <CounterStats />
        <SectionServices />
        <GoogleReviews placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID} />
        <SectionZoneIntervention />
        {/* SECTION RÉSEAUX SOCIAUX DÉSACTIVÉE - Décommentez quand vous aurez créé vos pages */}
        {/* <SectionReseauxSociaux /> */}
        <SeoContent />
      </main>
      <Footer />
    </>
  );
}

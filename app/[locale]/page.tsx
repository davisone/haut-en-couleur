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

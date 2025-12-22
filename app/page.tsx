import Navigation from './components/Navigation';
import SectionHero from './components/SectionHero';
import SectionEntreprise from './components/SectionEntreprise';
import CounterStats from './components/CounterStats';
import SectionServices from './components/SectionServices';
import GoogleReviews from './components/GoogleReviews';
import SectionZoneIntervention from './components/SectionZoneIntervention';
// import SectionReseauxSociaux from './components/SectionReseauxSociaux'; // DÉSACTIVÉ - À réactiver quand vous aurez vos pages sociales
import SeoContent from './components/SeoContent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <SectionHero />
        <SectionEntreprise />
        <CounterStats />
        <SectionServices />
        <GoogleReviews />
        <SectionZoneIntervention />
        {/* SECTION RÉSEAUX SOCIAUX DÉSACTIVÉE - Décommentez quand vous aurez créé vos pages */}
        {/* <SectionReseauxSociaux /> */}
        <SeoContent />
      </main>
      <Footer />
    </>
  );
}

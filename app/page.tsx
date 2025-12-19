import Navigation from './components/Navigation';
import SectionHero from './components/SectionHero';
import SectionEntreprise from './components/SectionEntreprise';
import SectionServices from './components/SectionServices';
import GoogleReviews from './components/GoogleReviews';
import SectionZoneIntervention from './components/SectionZoneIntervention';
import SectionReseauxSociaux from './components/SectionReseauxSociaux';
import SeoContent from './components/SeoContent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <SectionHero />
        <SectionEntreprise />
        <SectionServices />
        <GoogleReviews />
        <SectionZoneIntervention />
        <SectionReseauxSociaux />
        <SeoContent />
      </main>
      <Footer />
    </>
  );
}

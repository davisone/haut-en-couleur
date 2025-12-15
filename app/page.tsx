import Navigation from './components/Navigation';
import SectionHero from './components/SectionHero';
import SectionEntreprise from './components/SectionEntreprise';
import SectionServices from './components/SectionServices';
import SectionTemoignages from './components/SectionTemoignages';
import SectionZoneIntervention from './components/SectionZoneIntervention';
import SectionReseauxSociaux from './components/SectionReseauxSociaux';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <SectionHero />
        <SectionEntreprise />
        <SectionServices />
        <SectionTemoignages />
        <SectionZoneIntervention />
        <SectionReseauxSociaux />
      </main>
      <Footer />
    </>
  );
}

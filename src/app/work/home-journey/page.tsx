import type { Metadata } from 'next';
import HomeJourneyHero from '@/components/home-journey/hero';
import HomeJourneySectionNav from '@/components/home-journey/section-nav';
import HomeJourneyProblemSection from '@/components/home-journey/problem-section';
import HomeJourneyPhilosophySection from '@/components/home-journey/philosophy-section';
import HomeJourneyJourneysSection from '@/components/home-journey/journeys-section';
import HomeJourneyCapabilitiesSection from '@/components/home-journey/capabilities-section';
import HomeJourneyDesignPrinciplesSection from '@/components/home-journey/design-principles-section';
import HomeJourneyStructureDiagramSection from '@/components/home-journey/structure-diagram-section';
import HomeJourneyStatusSection from '@/components/home-journey/status-section';
import HomeJourneyPlannedDirectionsSection from '@/components/home-journey/planned-directions-section';
import HomeJourneyBackToWorkSection from '@/components/home-journey/back-to-work-section';

export const metadata: Metadata = {
  title: 'Home Journey — Nitin Kotcherlakota',
  description:
    'A notes-first platform that helps people organize buying, owning, maintaining, and understanding a home as one continuous journey.',
};

export default function HomeJourneyPage() {
  return (
    <>
      <HomeJourneyHero />
      <HomeJourneySectionNav />
      <HomeJourneyProblemSection />
      <HomeJourneyPhilosophySection />
      <HomeJourneyJourneysSection />
      <HomeJourneyCapabilitiesSection />
      <HomeJourneyDesignPrinciplesSection />
      <HomeJourneyStructureDiagramSection />
      <HomeJourneyStatusSection />
      <HomeJourneyPlannedDirectionsSection />
      <HomeJourneyBackToWorkSection />
    </>
  );
}

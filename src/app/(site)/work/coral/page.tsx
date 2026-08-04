import type { Metadata } from 'next';
import ComingSoonHero from '@/components/coming-soon/coming-soon-hero';
import ComingSoonNav from '@/components/coming-soon/coming-soon-nav';
import CoralConceptVisual from '@/components/coral/coral-concept-visual';
import { buildPageMetadata } from '@/lib/metadata';

const CONCEPT_AREAS = [
  'Privacy-first product design',
  'Explainable answers',
  'Personal financial context',
  'Controlled AI workflows',
  'Local AI exploration',
];

export const metadata: Metadata = buildPageMetadata({
  title: 'Coral',
  description:
    'Coral is a privacy-focused financial intelligence concept, currently in development. A detailed case study will follow once it can be shared responsibly.',
  path: '/work/coral',
});

export default function CoralPage() {
  return (
    <>
      <ComingSoonHero
        trail={[{ label: 'Work', href: '/work' }, { label: 'Coral' }]}
        statusLabel="Coming Soon"
        title="Coral"
        description="A privacy-focused financial intelligence concept designed to make complicated financial information easier to understand."
        supportingStatement="I’m currently shaping the product direction, system boundaries, and privacy model. A detailed case study will be published when the project is ready to be shared responsibly."
        conceptListLabel="Concept areas"
        conceptList={CONCEPT_AREAS}
        visual={<CoralConceptVisual />}
      />
      <ComingSoonNav
        message="Home Journey is the only active, complete case study right now — a Coral case study will follow."
        backHref="/work"
        backLabel="Back to all work"
        relatedHref="/work/home-journey"
        relatedLabel="View the Home Journey case study"
      />
    </>
  );
}

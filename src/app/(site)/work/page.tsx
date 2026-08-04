import type { Metadata } from 'next';
import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import WorkHomeJourneyFeature from '@/components/work/home-journey-feature';
import WorkCoralFeature from '@/components/work/coral-feature';
import WorkFutureExperimentsFeature from '@/components/work/future-experiments-feature';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Work',
  description:
    'Products and experiments exploring AI, personal decision-making, and thoughtful software design.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader
        eyebrow="Selected Work"
        title="Products and experiments"
        description="Products and experiments exploring AI, personal decision-making, and thoughtful software design."
      />

      <div className="mt-12 space-y-6">
        <WorkHomeJourneyFeature />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <WorkCoralFeature />
          <WorkFutureExperimentsFeature />
        </div>
      </div>
    </Container>
  );
}

import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import StatusBadge from '@/components/ui/status-badge';

export default function HomeJourneyPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader
        title="Home Journey"
        description="Flagship product case study for a thoughtful AI-enabled home experience."
      />
      <StatusBadge className="mt-6" variant="active">
        Active flagship
      </StatusBadge>
      <p className="mt-8 max-w-2xl text-base leading-7 text-text-muted">
        This page is a route shell for the Home Journey case study. Detailed content will arrive in a later PR.
      </p>
    </Container>
  );
}

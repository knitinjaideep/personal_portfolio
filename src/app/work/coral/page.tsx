import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import ComingSoonPanel from '@/components/project/coming-soon-panel';

export default function CoralPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader title="Coral" description="A product experiment marked as coming soon." />
      <div className="mt-10">
        <ComingSoonPanel label="Coral" />
      </div>
    </Container>
  );
}

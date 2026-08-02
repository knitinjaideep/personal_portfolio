import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import ComingSoonPanel from '@/components/project/coming-soon-panel';

export default function WorkPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader
        title="Work"
        description="A curated view of product work, active projects, and thoughtful experiments."
      />
      <div className="mt-10 grid gap-6">
        <ComingSoonPanel label="Work overview" />
      </div>
    </Container>
  );
}

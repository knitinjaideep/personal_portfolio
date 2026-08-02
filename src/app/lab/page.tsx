import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import ComingSoonPanel from '@/components/project/coming-soon-panel';

export default function LabPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader title="Lab" description="Projects, experiments, and research work in progress." />
      <div className="mt-10">
        <ComingSoonPanel label="Lab" />
      </div>
    </Container>
  );
}

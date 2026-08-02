import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import ComingSoonPanel from '@/components/project/coming-soon-panel';

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader title="About" description="Learn more about Nitin’s approach to product, engineering, and AI." />
      <div className="mt-10">
        <ComingSoonPanel label="About" />
      </div>
    </Container>
  );
}

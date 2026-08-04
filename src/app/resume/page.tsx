import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import ComingSoonPanel from '@/components/project/coming-soon-panel';

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader
        title="Résumé"
        description="A clean résumé shell for future portfolio content."
      />
      <div className="mt-10">
        <ComingSoonPanel label="Résumé" />
      </div>
    </Container>
  );
}

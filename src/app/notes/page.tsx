import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import ComingSoonPanel from '@/components/project/coming-soon-panel';

export default function NotesPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader
        title="Notes"
        description="A lightly structured space for ideas, notes, and reflections."
      />
      <div className="mt-10">
        <ComingSoonPanel label="Notes" />
      </div>
    </Container>
  );
}

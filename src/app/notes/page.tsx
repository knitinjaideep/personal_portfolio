import type { Metadata } from 'next';
import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import NotePlaceholderRow from '@/components/notes/note-placeholder-row';
import ComingSoonNav from '@/components/coming-soon/coming-soon-nav';
import { buildPageMetadata } from '@/lib/metadata';

const PLANNED_ARTICLES = [
  'Building notes-first products',
  'Designing trustworthy AI interfaces',
  'Local models on Apple Silicon',
  'Agentic workflows without unnecessary complexity',
];

export const metadata: Metadata = buildPageMetadata({
  title: 'Notes',
  description:
    'Writing about engineering decisions, AI systems, product design, and lessons learned while building.',
  path: '/notes',
});

export default function NotesPage() {
  return (
    <>
      <Container className="py-16 sm:py-24">
        <SectionHeader
          title="Notes"
          description="Writing about engineering decisions, AI systems, product design, and lessons learned while building."
        />

        <div className="mt-12 space-y-3">
          {PLANNED_ARTICLES.map((title) => (
            <NotePlaceholderRow key={title} title={title} />
          ))}
        </div>
      </Container>
      <ComingSoonNav
        message="Nothing here has shipped yet — Home Journey is the active, complete case study right now."
        backHref="/work"
        backLabel="Back to all work"
        relatedHref="/work/home-journey"
        relatedLabel="View the Home Journey case study"
      />
    </>
  );
}

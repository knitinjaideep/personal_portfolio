import { ArrowRight } from 'lucide-react';
import StatusBadge from '@/components/ui/status-badge';
import TextLink from '@/components/ui/text-link';
import CoralConceptVisual from '@/components/coral/coral-concept-visual';

export default function WorkCoralFeature() {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-border bg-surface p-6 shadow-sm sm:p-8">
      <StatusBadge variant="coming-soon">Coming Soon</StatusBadge>

      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        Coral
      </h2>

      <p className="mt-3 max-w-lg text-sm leading-7 text-text-muted sm:text-base">
        A privacy-focused financial intelligence concept designed to make complicated financial
        information easier to understand.
      </p>

      <div className="mt-6">
        <CoralConceptVisual compact />
      </div>

      <p className="mt-4 text-xs text-text-muted">Concept page &mdash; not a live product.</p>

      <TextLink href="/work/coral" className="mt-3 inline-flex w-fit items-center gap-1.5">
        View concept <ArrowRight size={16} aria-hidden="true" />
      </TextLink>
    </article>
  );
}

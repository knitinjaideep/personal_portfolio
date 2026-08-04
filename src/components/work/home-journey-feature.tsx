import { ArrowRight } from 'lucide-react';
import StatusBadge from '@/components/ui/status-badge';
import TextLink from '@/components/ui/text-link';
import HomeJourneyProductPreview from '@/components/home-journey/product-preview';

export default function WorkHomeJourneyFeature() {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-glow sm:p-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
        <div>
          <StatusBadge variant="active">Active Development</StatusBadge>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Home Journey
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
            A notes-first platform for organizing the journey from buying a home to owning and
            maintaining it.
          </p>

          <TextLink href="/work/home-journey" className="mt-7 inline-flex items-center gap-1.5">
            View case study <ArrowRight size={16} aria-hidden="true" />
          </TextLink>
        </div>

        <HomeJourneyProductPreview />
      </div>
    </article>
  );
}

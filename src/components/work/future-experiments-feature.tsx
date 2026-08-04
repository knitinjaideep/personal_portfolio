import { ArrowRight, FlaskConical } from 'lucide-react';
import StatusBadge from '@/components/ui/status-badge';
import TextLink from '@/components/ui/text-link';

export default function WorkFutureExperimentsFeature() {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-dashed border-borderStrong bg-surface p-6 sm:p-8">
      <StatusBadge variant="coming-soon">Coming Soon</StatusBadge>

      <span
        aria-hidden="true"
        className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accentTint text-accent"
      >
        <FlaskConical size={18} />
      </span>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        Future Experiments
      </h2>

      <p className="mt-3 max-w-lg text-sm leading-7 text-text-muted sm:text-base">
        Smaller explorations in local AI, agentic workflows, document understanding, and developer
        tools.
      </p>

      <TextLink href="/lab" className="mt-6 inline-flex w-fit items-center gap-1.5">
        Visit the Lab <ArrowRight size={16} aria-hidden="true" />
      </TextLink>
    </article>
  );
}

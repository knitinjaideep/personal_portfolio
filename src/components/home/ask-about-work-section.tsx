import { Send } from 'lucide-react';
import Container from '@/components/ui/container';
import StatusBadge from '@/components/ui/status-badge';

const PROMPTS = [
  'How is Home Journey designed?',
  'Why build a notes-first home platform?',
  'What technologies do you work with?',
  'How do you approach AI product design?',
];

export default function AskAboutWorkSection() {
  return (
    <section className="bg-surfaceElevated py-16 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Ask About My Work
          </p>
          <StatusBadge variant="coming-soon">Coming Soon</StatusBadge>
        </div>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          Curious about something?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
          An interactive guide to my projects, engineering decisions, and product thinking.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              disabled
              className="cursor-not-allowed rounded-full border border-border bg-surface px-4 py-2 text-left text-sm text-text-muted disabled:opacity-70"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-border bg-surface p-2 pl-5 sm:flex-row sm:items-center sm:rounded-full">
          <label htmlFor="ask-about-work-input" className="sr-only">
            Ask anything about my work — chat is disabled while this feature is in development
          </label>
          <input
            id="ask-about-work-input"
            type="text"
            disabled
            readOnly
            placeholder="Ask anything about my work…"
            className="w-full flex-1 bg-transparent px-2 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none disabled:cursor-not-allowed"
          />
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-muted sm:self-auto">
            Coming Soon
            <Send size={14} aria-hidden="true" className="opacity-50" />
          </span>
        </div>
      </Container>
    </section>
  );
}

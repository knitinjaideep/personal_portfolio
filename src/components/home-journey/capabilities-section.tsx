import { FileText, Layers, ListChecks, NotebookPen, RefreshCcw, Search, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/container';

const CAPABILITIES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Stage-aware organization',
    body: 'The record is designed to reorganize itself around where a household is in the journey, from searching to settled.',
    icon: Layers,
  },
  {
    title: 'Personal notes',
    body: 'Free-form notes are the starting point for capturing anything about a home, before any structure is added.',
    icon: NotebookPen,
  },
  {
    title: 'Important documents',
    body: 'A place to keep the paperwork tied to a home, organized alongside the notes that reference it.',
    icon: FileText,
  },
  {
    title: 'Tasks and milestones',
    body: 'Lightweight tracking for the tasks and milestones that come with buying and owning a home.',
    icon: ListChecks,
  },
  {
    title: 'Household collaboration',
    body: 'Early direction for letting more than one person contribute to the same home record.',
    icon: Users,
  },
  {
    title: 'Searchable home history',
    body: 'A direction for making years of notes and decisions easy to find again when they matter.',
    icon: Search,
  },
  {
    title: 'Continuity after closing',
    body: 'The record is designed to carry forward past closing day, instead of ending at the transaction.',
    icon: RefreshCcw,
  },
];

export default function HomeJourneyCapabilitiesSection() {
  return (
    <section id="capabilities" className="scroll-mt-28 bg-surfaceElevated py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Key Capabilities
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          The product direction
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
          These are the capabilities Home Journey is being built toward, at different stages of
          readiness.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accentTint text-accent">
                <Icon size={18} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">{body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

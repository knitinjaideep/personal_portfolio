import { FolderKanban, History, Lightbulb, Search, Users, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/container';

const DIRECTIONS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Better post-closing organization',
    body: 'Refining how the record reorganizes itself once a household moves from buying to owning.',
    icon: FolderKanban,
  },
  {
    title: 'Household collaboration',
    body: 'Exploring how more than one person can contribute to the same home record.',
    icon: Users,
  },
  {
    title: 'Maintenance planning',
    body: 'Looking at ways to help households plan recurring and seasonal home maintenance.',
    icon: Wrench,
  },
  {
    title: 'Search across the home record',
    body: 'Considering how to make years of notes and documents easy to search and revisit.',
    icon: Search,
  },
  {
    title: 'Contextual guidance',
    body: 'Exploring gentle, in-context suggestions based on where someone is in their journey.',
    icon: Lightbulb,
  },
  {
    title: 'Long-term property history',
    body: 'Thinking through how a home record could stay useful across many years of ownership.',
    icon: History,
  },
];

export default function HomeJourneyPlannedDirectionsSection() {
  return (
    <section id="whats-next" className="scroll-mt-28 bg-surfaceElevated py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          What&rsquo;s Next
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          Planned directions
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
          None of the following is released yet. These are directions being explored next, not
          shipped features.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIRECTIONS.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[1.5rem] border border-dashed border-borderStrong bg-background/60 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-warmTint text-warm">
                <Icon size={18} aria-hidden="true" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                Future direction
              </p>
              <h3 className="mt-1.5 text-base font-semibold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">{body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

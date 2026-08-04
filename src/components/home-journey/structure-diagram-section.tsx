import { ChevronRight, Compass, Home, NotebookPen, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/container';

const STEPS: { label: string; detail: string; icon: LucideIcon }[] = [
  { label: 'User', detail: 'Someone buying, or already owning, a home', icon: User },
  { label: 'Chooses a journey', detail: '“I’m buying” or “I own a home”', icon: Compass },
  {
    label: 'Adds notes, tasks, documents, and contacts',
    detail: 'Captured in their own words, over time',
    icon: NotebookPen,
  },
  {
    label: 'Builds an organized home record',
    detail: 'A record that continues after closing',
    icon: Home,
  },
];

export default function HomeJourneyStructureDiagramSection() {
  return (
    <section id="product-structure" className="scroll-mt-28 bg-surfaceElevated py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Product Structure
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          How the journey is structured
        </h2>

        <ol className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-3">
          {STEPS.map((step, index) => (
            <li
              key={step.label}
              className="flex flex-1 items-center gap-3 lg:flex-col lg:items-stretch"
            >
              <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-border bg-surface p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accentTint text-accent">
                  <step.icon size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    <span className="text-text-muted">{index + 1}.</span> {step.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-text-muted">{step.detail}</p>
                </div>
              </div>

              {index < STEPS.length - 1 ? (
                <ChevronRight
                  aria-hidden="true"
                  className="hidden shrink-0 text-border lg:block"
                  size={20}
                />
              ) : null}
              {index < STEPS.length - 1 ? (
                <ChevronRight
                  aria-hidden="true"
                  className="shrink-0 rotate-90 text-border lg:hidden"
                  size={20}
                />
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

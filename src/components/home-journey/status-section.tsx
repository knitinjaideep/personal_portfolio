import Container from '@/components/ui/container';

type Stage = 'Actively building' | 'Early direction' | 'Exploring';

const STAGE_STYLES: Record<Stage, string> = {
  'Actively building': 'bg-accent',
  'Early direction': 'bg-warm',
  Exploring: 'bg-borderStrong',
};

const AREAS: { title: string; stage: Stage; body: string }[] = [
  {
    title: 'Buyer and owner journeys',
    stage: 'Actively building',
    body: 'Core flows for both journeys are in active use and being refined.',
  },
  {
    title: 'Notes organization',
    stage: 'Actively building',
    body: 'Structure for organizing notes by journey and stage is taking shape.',
  },
  {
    title: 'Onboarding',
    stage: 'Early direction',
    body: 'Early thinking on how new users choose a journey and get started.',
  },
  {
    title: 'Home record continuity',
    stage: 'Early direction',
    body: 'Direction for keeping the record useful long after closing.',
  },
  {
    title: 'Household collaboration',
    stage: 'Exploring',
    body: 'Early exploration of how more than one person manages a shared home record.',
  },
];

export default function HomeJourneyStatusSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Status</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          Home Journey is under active development.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
          Rather than a completion percentage, here is where each part of the product stands today.
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {AREAS.map((area) => (
            <div key={area.title} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between gap-3">
                <dt className="font-semibold text-text-primary">{area.title}</dt>
                <dd className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-semibold text-text-muted">
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${STAGE_STYLES[area.stage]}`}
                  />
                  {area.stage}
                </dd>
              </div>
              <p className="mt-2 text-sm leading-6 text-text-muted">{area.body}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

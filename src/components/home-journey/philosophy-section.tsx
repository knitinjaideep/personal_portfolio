import Container from '@/components/ui/container';

const PRINCIPLES = [
  {
    title: 'Notes before complicated forms',
    body: 'Capture a thought the way it actually occurs, before asking anyone to fill out structured fields.',
  },
  {
    title: 'Users write in their own language',
    body: 'No rigid taxonomies to learn first. People describe their home the way they would describe it to a friend.',
  },
  {
    title: 'Organization follows the stage of the journey',
    body: 'What matters while searching for a home is different from what matters two years after closing.',
  },
  {
    title: 'Structure is added only when useful',
    body: 'Categories, fields, and tags are designed to appear when they help, not by default.',
  },
  {
    title: 'The product continues after closing',
    body: 'Most tools stop at the transaction. Home Journey is designed to keep going with the household.',
  },
  {
    title: 'Guidance without pressure',
    body: 'Helpful prompts along the way, not required steps standing between people and their notes.',
  },
  {
    title: 'Calm over clutter',
    body: 'A quiet, readable record instead of a dashboard crowded with widgets and alerts.',
  },
];

export default function HomeJourneyPhilosophySection() {
  return (
    <section className="bg-surfaceElevated py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Product Philosophy
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          How the product is meant to think
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
          Home Journey is still taking shape. These are the ideas guiding that direction, not a
          finished product.
        </p>

        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {PRINCIPLES.map((principle, index) => (
            <li key={principle.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-text-muted"
              >
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-text-primary">{principle.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{principle.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

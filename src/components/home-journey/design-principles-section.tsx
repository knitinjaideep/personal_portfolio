import Container from '@/components/ui/container';

const PRINCIPLES = [
  {
    title: 'Calm over clutter',
    body: 'Minimal visual noise, so the home record stays easy to scan even after years of notes.',
  },
  {
    title: 'Notes before forms',
    body: 'Every workflow is designed to start with a note, not a required field.',
  },
  {
    title: 'Guidance without pressure',
    body: 'Suggestions appear when they might help, never as blockers standing in the way.',
  },
  {
    title: 'Useful before and after closing',
    body: 'Designed to support the entire ownership timeline, not only the purchase.',
  },
  {
    title: 'Private by default',
    body: 'A personal home record, built for a household, not a public or shared feed.',
  },
  {
    title: 'Mobile-friendly',
    body: 'Designed to work from a phone at an open house, an inspection, or a job site.',
  },
  {
    title: 'Designed for real households',
    body: 'Room for the way people actually coordinate a home together, not just one user.',
  },
];

export default function HomeJourneyDesignPrinciplesSection() {
  return (
    <section id="design-principles" className="scroll-mt-28 bg-background py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Design Principles
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          What guides the design
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="border-t border-border pt-4">
              <p className="font-semibold text-text-primary">{principle.title}</p>
              <p className="mt-1.5 text-sm leading-6 text-text-muted">{principle.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

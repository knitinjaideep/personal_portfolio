import Container from '@/components/ui/container';
import { profile } from '@/content/profile';

export default function AboutTimelineSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Journey</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          A broad look at how I got here
        </h2>

        <ol className="mt-10 space-y-8 border-l border-border pl-8">
          {profile.timeline.map((stage) => (
            <li key={stage.label} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.31rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background"
              />
              <p className="font-semibold text-text-primary">{stage.label}</p>
              <p className="mt-1.5 max-w-xl text-sm leading-6 text-text-muted">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

import Container from '@/components/ui/container';
import { profile } from '@/content/profile';

export default function AboutCurrentFocusSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Current Focus
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          What I’m spending time on right now
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {profile.currentFocus.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-border bg-surface p-5 text-base font-medium text-text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

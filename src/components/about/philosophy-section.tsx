import Container from '@/components/ui/container';
import { profile } from '@/content/profile';

export default function AboutPhilosophySection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Engineering Philosophy
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          How I approach building things
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {profile.philosophy.map((theme) => (
            <div key={theme.title} className="border-t border-border pt-4">
              <p className="font-semibold text-text-primary">{theme.title}</p>
              <p className="mt-1.5 text-sm leading-6 text-text-muted">{theme.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

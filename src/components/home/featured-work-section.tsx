import Container from '@/components/ui/container';
import HomeJourneyCard from '@/components/home/home-journey-card';
import CoralCard from '@/components/home/coral-card';

export default function FeaturedWorkSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Featured Work
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          Products I&rsquo;m building
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
          Long-term products exploring how thoughtful software can simplify complicated parts of
          everyday life.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <HomeJourneyCard />
          <CoralCard />
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';
import Container from '@/components/ui/container';
import StatusBadge from '@/components/ui/status-badge';
import SecondaryButton from '@/components/ui/secondary-button';
import Breadcrumb from '@/components/ui/breadcrumb';
import HomeJourneyProductPreview from '@/components/home-journey/product-preview';

export default function HomeJourneyHero() {
  return (
    <section id="overview" className="relative scroll-mt-28 overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[26rem] w-[26rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, var(--purple-glow), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[20rem] w-[20rem] -translate-x-1/3 rounded-full blur-[110px]"
        style={{ background: 'radial-gradient(closest-side, var(--warm-tint), transparent)' }}
      />

      <Container className="relative pb-16 pt-8 sm:pb-20 sm:pt-10">
        <Breadcrumb items={[{ label: 'Work', href: '/work' }, { label: 'Home Journey' }]} />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-10">
          <div className="max-w-2xl">
            <StatusBadge>Active Development</StatusBadge>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Home Journey
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
              A notes-first platform that helps people organize buying, owning, maintaining, and
              understanding a home as one continuous journey.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#the-problem"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentHover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Explore the concept
              </Link>
              <SecondaryButton href="/work">Back to all work</SecondaryButton>
            </div>
          </div>

          <HomeJourneyProductPreview />
        </div>
      </Container>
    </section>
  );
}

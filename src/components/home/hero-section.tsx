import Link from 'next/link';
import Container from '@/components/ui/container';
import PrimaryButton from '@/components/ui/primary-button';
import HeroSystemVisual from '@/components/home/hero-system-visual';
import { getContactLinks } from '@/components/contact/contact-links';

const INTERESTS = [
  'Personal Finance',
  'Homeownership',
  'Local AI',
  'Agentic Systems',
  'Developer Tools',
];

export default function HeroSection() {
  const contactLinks = getContactLinks();

  return (
    <section className="relative -mt-16 overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, var(--purple-glow), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[22rem] w-[22rem] -translate-x-1/3 rounded-full blur-[110px]"
        style={{ background: 'radial-gradient(closest-side, var(--blue-glow), transparent)' }}
      />

      <Container className="relative pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-10">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surfaceElevated px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              Engineer, builder, AI systems in progress.
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Nitin Kotcherlakota
            </h1>

            <p className="mt-4 text-2xl font-medium leading-snug text-text-primary sm:text-3xl">
              Software engineer building human-centered{' '}
              <span className="text-accent">AI products</span>.
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
              I build software that helps make complicated life decisions feel manageable. Currently
              exploring thoughtful AI experiences for personal finance, homeownership, and everyday
              decision-making.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-text-muted">
              {INTERESTS.map((interest, index) => (
                <li key={interest} className="flex items-center gap-3">
                  <span>{interest}</span>
                  {index < INTERESTS.length - 1 ? (
                    <span aria-hidden="true" className="text-borderStrong">
                      &bull;
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/work">Explore my work</PrimaryButton>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-borderStrong bg-transparent px-6 py-3 text-sm font-semibold text-text-primary transition hover:bg-surfaceElevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                About me
              </Link>
            </div>

            {contactLinks.length > 0 ? (
              <div className="mt-9 flex items-center gap-3">
                {contactLinks.map(({ id, href, accessibleLabel, icon: Icon, external }) => (
                  <a
                    key={id}
                    href={href}
                    aria-label={accessibleLabel}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <HeroSystemVisual />
        </div>
      </Container>
    </section>
  );
}

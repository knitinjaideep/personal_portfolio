import { Github, Linkedin } from 'lucide-react';
import Container from '@/components/ui/container';
import PrimaryButton from '@/components/ui/primary-button';
import HeroSystemVisual from '@/components/home/hero-system-visual';

const INTERESTS = [
  'Personal Finance',
  'Homeownership',
  'Local AI',
  'Agentic Systems',
  'Developer Tools',
];

const SOCIAL_PLACEHOLDERS = [
  { label: 'GitHub', icon: Github },
  { label: 'LinkedIn', icon: Linkedin },
];

export default function HeroSection() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-heroBackground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(closest-side, var(--hero-glow-purple), transparent)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[22rem] w-[22rem] -translate-x-1/3 rounded-full blur-[110px]"
        style={{ background: 'radial-gradient(closest-side, var(--hero-glow-blue), transparent)' }}
      />

      <Container className="relative pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-10">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-heroBorder bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-heroTextMuted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              Engineer, builder, AI systems in progress.
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-heroText sm:text-6xl lg:text-7xl">
              Nitin Kotcherlakota
            </h1>

            <p className="mt-4 text-2xl font-medium leading-snug text-heroText sm:text-3xl">
              Software engineer building human-centered{' '}
              <span className="text-accent">AI products</span>.
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-heroTextMuted sm:text-lg">
              I build software that helps make complicated life decisions feel manageable. Currently
              exploring thoughtful AI experiences for personal finance, homeownership, and everyday
              decision-making.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-heroTextMuted">
              {INTERESTS.map((interest, index) => (
                <li key={interest} className="flex items-center gap-3">
                  <span>{interest}</span>
                  {index < INTERESTS.length - 1 ? (
                    <span aria-hidden="true" className="text-heroBorderStrong">
                      &bull;
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/work">Explore my work</PrimaryButton>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-heroBorderStrong bg-transparent px-6 py-3 text-sm font-semibold text-heroText transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-heroBackground"
              >
                About me
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3">
              {SOCIAL_PLACEHOLDERS.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  title={`${label} — link coming soon`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-heroBorder text-heroTextMuted"
                >
                  <Icon size={16} aria-hidden="true" />
                  <span className="sr-only">{label} profile (coming soon)</span>
                </span>
              ))}
            </div>
          </div>

          <HeroSystemVisual />
        </div>
      </Container>
    </section>
  );
}

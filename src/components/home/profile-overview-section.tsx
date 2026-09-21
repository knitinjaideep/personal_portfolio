import { ArrowRight, Beaker, BriefcaseBusiness, FileText, UserRound } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/container';
import TextLink from '@/components/ui/text-link';
import { profile } from '@/content/profile';

const FEATURED_PRINCIPLES = profile.philosophy.slice(0, 3);

const DESTINATIONS = [
  {
    href: '/work',
    label: 'Work',
    description: 'Products and experiments with the strongest proof of how I build.',
    icon: BriefcaseBusiness,
  },
  {
    href: '/about',
    label: 'About',
    description: 'The fuller story, philosophy, and current direction behind the work.',
    icon: UserRound,
  },
  {
    href: '/resume',
    label: 'Resume',
    description: 'A formal view of experience, skills, and project background.',
    icon: FileText,
  },
  {
    href: '/lab',
    label: 'Lab',
    description: 'Smaller explorations, prototypes, and ideas still taking shape.',
    icon: Beaker,
  },
];

export default function ProfileOverviewSection() {
  return (
    <section className="border-y border-border bg-surfaceElevated py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              At A Glance
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              A builder focused on useful, understandable AI products
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
              I care about products that help people make clearer decisions, especially where
              money, homes, privacy, and everyday planning get complicated.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {profile.currentFocus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>

            <TextLink href="/about" className="mt-7 gap-1.5">
              Read the full about page <ArrowRight size={16} aria-hidden="true" />
            </TextLink>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {FEATURED_PRINCIPLES.map((principle) => (
                <div key={principle.title} className="border-t border-border pt-4">
                  <p className="font-semibold leading-6 text-text-primary">{principle.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{principle.description}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {DESTINATIONS.map(({ href, label, description, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-[1.25rem] border border-border bg-surface p-5 transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-accent">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className="text-text-muted transition group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-text-primary">{label}</p>
                  <p className="mt-1.5 text-sm leading-6 text-text-muted">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Camera,
  Gamepad2,
  Layers3,
  MapPinned,
  Mountain,
  Plane,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/container';
import TextLink from '@/components/ui/text-link';
import { buildPageMetadata } from '@/lib/metadata';

type ProjectPreview = {
  title: string;
  description: string;
  href?: string;
  meta: string;
};

type InterestItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const PROJECTS: ProjectPreview[] = [
  {
    title: 'Home Journey',
    description:
      'A notes-first platform for organizing the journey from buying a home to owning and maintaining it.',
    href: '/work/home-journey',
    meta: 'Personal software project',
  },
  {
    title: 'Coral',
    description:
      'A local-first financial statement analyzer that turns private PDFs into dashboards and grounded financial answers.',
    href: '/work/coral',
    meta: 'Personal software project',
  },
  {
    title: 'Our Frame',
    description:
      'A personal product idea being shaped around shared memories and everyday connection.',
    meta: 'Early idea',
  },
];

const AWAY_FROM_SCREEN: InterestItem[] = [
  {
    title: 'Outdoor games',
    description: 'Making room for play, movement, and low-stakes competition.',
    icon: Gamepad2,
  },
  {
    title: 'Time outside',
    description: 'Stepping away from screens to reset attention and energy.',
    icon: Mountain,
  },
  {
    title: 'Travel',
    description: 'Noticing how different places change the way everyday life feels.',
    icon: Plane,
  },
  {
    title: 'Family time',
    description: 'Keeping space for the people and routines that matter most.',
    icon: Users,
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: 'Personal',
  description: 'Personal projects, photography, travel, and life outside work.',
  path: '/personal',
});

export default function PersonalPage() {
  return (
    <>
      <section className="bg-background py-16 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Outside Work
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Build. Explore. Capture. Repeat.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted sm:text-lg">
            The things I work on outside of my day job — personal projects, photography, travel,
            and time away from the screen.
          </p>
        </Container>
      </section>

      <section
        id="projects"
        className="scroll-mt-28 border-y border-border bg-background py-16 sm:py-24"
      >
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Personal Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Things I build
            </h2>
          </div>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="grid gap-5 py-7 sm:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-8"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {project.meta}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary">
                    {project.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
                  {project.description}
                </p>
                {project.href ? (
                  <TextLink href={project.href} className="w-fit items-center gap-1.5">
                    View case study <ArrowRight size={16} aria-hidden="true" />
                  </TextLink>
                ) : (
                  <p className="text-sm font-medium text-text-muted">Public page not available yet</p>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="photography" className="scroll-mt-28 bg-surfaceElevated py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accentTint text-accent">
                <Camera size={22} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Photography
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-text-muted">
                A collection of moments, places, and perspectives.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {['Moments', 'Places', 'Perspectives'].map((label) => (
                <div
                  key={label}
                  className="min-h-40 rounded-[1.5rem] border border-dashed border-borderStrong bg-background p-5"
                >
                  <p className="text-sm font-semibold text-text-primary">{label}</p>
                  <p className="mt-3 text-sm leading-6 text-text-muted">
                    Reserved for real portfolio images when they are ready to publish.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="travel" className="scroll-mt-28 bg-background py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Travel
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                New places, different cultures, and memorable experiences.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                This section will stay simple until there is real travel writing or photography to
                publish. For now, it gives travel a clear home without inventing destinations or
                itineraries.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-surface p-6">
              <MapPinned className="text-accent" size={28} aria-hidden="true" />
              <p className="mt-5 text-lg font-semibold text-text-primary">Travel notes</p>
              <p className="mt-3 text-sm leading-6 text-text-muted">
                A future place for real trips, reflections, and images once the content exists.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Away from the Screen
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              A little more balance than a browser tab can offer.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AWAY_FROM_SCREEN.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[1.5rem] border border-border bg-surface p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accentTint text-accent">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[1.5rem] border border-border bg-surface p-6 sm:p-8">
            <Layers3 className="text-accent" size={26} aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-text-primary">
              Personal stays complementary to Work.
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
              Professional experience, resume details, and career history live on Work. This page is
              for side projects and the parts of life that keep the software work grounded.
            </p>
            <Link
              href="/work"
              className="mt-5 inline-flex w-fit items-center gap-1.5 py-1 font-medium text-accent transition hover:text-accentHover"
            >
              See professional work <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

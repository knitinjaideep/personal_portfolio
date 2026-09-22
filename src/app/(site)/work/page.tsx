import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Download, Linkedin } from 'lucide-react';
import CareerTimeline from '@/components/work/career-timeline';
import Container from '@/components/ui/container';
import PrimaryButton from '@/components/ui/primary-button';
import { profile } from '@/content/profile';
import { resume } from '@/content/resume';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Work',
  description:
    'A professional career timeline for Nitin Kotcherlakota, from computer science education to large-scale financial systems and AI-focused growth.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <>
      <section className="bg-background py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Work</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                A journey of continuous learning.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted sm:text-lg">
                From computer science to building large-scale financial systems — and now exploring
                what&rsquo;s next with AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {profile.resumePath ? (
                <a
                  href={profile.resumePath}
                  download
                  aria-label={`Download ${profile.name}'s résumé as a PDF`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentHover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Download aria-hidden="true" size={16} />
                  Download résumé
                </a>
              ) : null}
              <a
                href={resume.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on LinkedIn`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Linkedin aria-hidden="true" size={16} />
                View on LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-background py-16 sm:py-24">
        <Container>
          <Suspense fallback={null}>
            <CareerTimeline />
          </Suspense>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-14 sm:py-16">
        <Container className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-text-primary sm:text-xl">
              Interested in working together?
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-text-muted">
              I&rsquo;m always open to thoughtful conversations about software, systems, and useful
              products.
            </p>
          </div>
          <PrimaryButton href="/contact">Get in touch</PrimaryButton>
        </Container>
      </section>
    </>
  );
}

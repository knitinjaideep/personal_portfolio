import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/container';
import ContactForm from '@/components/contact/contact-form';
import { getContactLinks } from '@/components/contact/contact-links';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description:
    'Contact Nitin Kotcherlakota about software, AI, product ideas, or thoughtful engineering conversations.',
  path: '/contact',
});

export default function ContactPage() {
  const links = getContactLinks();

  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(360px,0.64fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Let&apos;s Connect
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Let&rsquo;s talk.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
              Building something interesting? Working on software, AI, or just want to say hello?
              I&rsquo;d love to hear from you.
            </p>

            <div className="mt-10 grid gap-4">
              {links.map(({ id, label, href, accessibleLabel, icon: Icon, external }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={accessibleLabel}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex max-w-xl items-center gap-4 rounded-[1.25rem] border border-border bg-surface p-4 transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surfaceElevated text-accent transition group-hover:border-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-text-primary">{label}</span>
                    <span className="mt-1 block truncate text-sm text-text-muted">
                      {id === 'email' ? href.replace('mailto:', '') : href.replace('https://', '')}
                    </span>
                  </span>
                  {external ? (
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-text-muted transition group-hover:text-accent"
                    />
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

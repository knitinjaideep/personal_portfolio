import Container from '@/components/ui/container';
import { getContactLinks } from '@/components/contact/contact-links';

export default function ContactCta() {
  const links = getContactLinks();

  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="rounded-[2rem] border border-border bg-surface px-6 py-10 sm:px-10 sm:py-12">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Interested in thoughtful AI products, engineering systems, or product-building
            conversations?
          </h2>

          {links.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map(({ id, label, href, accessibleLabel, icon: Icon, external }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={accessibleLabel}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surfaceElevated px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-text-muted">
              Contact links will be added here once verified.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

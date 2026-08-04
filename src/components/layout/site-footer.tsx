import { ArrowUpRight } from 'lucide-react';
import { getContactLinks } from '@/components/contact/contact-links';

export default function SiteFooter() {
  const links = getContactLinks();

  return (
    <footer className="border-t border-border bg-background/95 px-4 py-10 text-sm text-text-muted sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-base font-semibold text-text-primary">Nitin Kotcherlakota</p>
          <p>
            Building thoughtful products at the intersection of engineering, AI, and everyday life.
          </p>
        </div>
        {links.length > 0 ? (
          <div className="flex flex-wrap gap-3 text-sm">
            {links.map(({ id, label, href, accessibleLabel, icon: Icon, external }) => (
              <a
                key={id}
                href={href}
                aria-label={accessibleLabel}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon aria-hidden="true" size={14} />
                {label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <div className="mt-8 flex items-center justify-between text-xs text-text-muted sm:mt-10">
        <p>&copy; {new Date().getFullYear()} Nitin Kotcherlakota</p>
        <a
          href="#content"
          className="inline-flex items-center gap-1 text-accent transition hover:text-accentHover"
        >
          Back to top <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}

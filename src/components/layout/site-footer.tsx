import { ArrowUpRight } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/95 px-4 py-10 text-sm text-text-muted sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-base font-semibold text-text-primary">Nitin Kotcherlakota</p>
          <p>
            Building thoughtful products at the intersection of engineering, AI, and everyday life.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-text-primary">
            GitHub
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-text-primary">
            LinkedIn
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-text-primary">
            Email
          </span>
        </div>
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

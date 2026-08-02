import Link from 'next/link';
import StatusBadge from '@/components/ui/status-badge';

const BAR_HEIGHTS = [35, 58, 42, 70, 50, 64];

function CoralDashboardPreview() {
  return (
    <div
      className="mt-6 overflow-hidden rounded-2xl border border-border bg-background/60 p-4"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <span className="h-2 w-2 rounded-full bg-status-coming-soon" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
          Coral &middot; Demonstration data
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-3">
          <p className="text-[11px] uppercase tracking-wide text-text-muted">Account A</p>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {BAR_HEIGHTS.map((height, index) => (
              <span
                key={index}
                style={{ height: `${height}%` }}
                className="w-2 flex-1 rounded-full bg-accent/50"
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-3">
          <p className="text-[11px] uppercase tracking-wide text-text-muted">Category trend</p>
          <svg viewBox="0 0 100 40" className="mt-3 h-16 w-full" preserveAspectRatio="none">
            <polyline
              points="0,30 20,23 40,26 60,14 80,18 100,8"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-border bg-surface p-3">
        <p className="text-[11px] uppercase tracking-wide text-text-muted">Sample insight</p>
        <div className="mt-2.5 space-y-2">
          <div className="h-2 w-4/5 rounded-full bg-border" />
          <div className="h-2 w-3/5 rounded-full bg-border" />
        </div>
      </div>
    </div>
  );
}

export default function CoralCard() {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-border bg-surface p-6 shadow-sm sm:p-8">
      <StatusBadge variant="coming-soon">Coming Soon</StatusBadge>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        Coral
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-7 text-text-muted sm:text-base">
        A privacy-focused financial intelligence concept designed to turn fragmented financial
        information into understandable answers.
      </p>

      <CoralDashboardPreview />

      <Link
        href="/work/coral"
        className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-text-muted transition hover:border-borderStrong hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Coming Soon
      </Link>
    </article>
  );
}

import ProductCard from '@/components/work/product-card';

const BAR_HEIGHTS = [35, 58, 42, 70, 50, 64];

function CoralDashboardPreview() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-border bg-background/60 p-4"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <span className="h-2 w-2 rounded-full bg-status-active" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
          Coral &middot; Local analysis
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
    <ProductCard
      title="Coral"
      description="A local-first financial statement analyzer designed to turn fragmented private statements into dashboards and grounded answers."
      href="/work/coral"
      visual={<CoralDashboardPreview />}
    />
  );
}

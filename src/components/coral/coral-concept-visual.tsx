import { CreditCard, Landmark, PiggyBank, Send } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const BAR_HEIGHTS = [35, 58, 42, 70, 50, 64];

const SAMPLE_ACCOUNTS: { label: string; icon: LucideIcon; maskWidth: string }[] = [
  { label: 'Sample account', icon: Landmark, maskWidth: 'w-16' },
  { label: 'Sample account', icon: CreditCard, maskWidth: 'w-12' },
  { label: 'Sample account', icon: PiggyBank, maskWidth: 'w-20' },
];

interface CoralConceptVisualProps {
  compact?: boolean;
}

/**
 * Purely illustrative dashboard mockup — every value is masked or explicitly
 * labeled as sample/demonstration content, never real financial data.
 */
export default function CoralConceptVisual({ compact = false }: CoralConceptVisualProps) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[420px] select-none overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-glow"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-status-active" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
            Coral &middot; Local-first
          </span>
        </div>
        <span className="hidden rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted sm:inline-flex">
          Private workspace
        </span>
      </div>

      <div className="p-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-background/60 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">
              Category trend
            </p>
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

          <div className="rounded-xl border border-border bg-background/60 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">
              Sample account
            </p>
            <div className="mt-3 flex h-16 items-end gap-1.5">
              {BAR_HEIGHTS.map((height, index) => (
                <span
                  key={index}
                  style={{
                    height: `${height}%`,
                    backgroundColor: 'color-mix(in srgb, var(--accent) 55%, transparent)',
                  }}
                  className="w-2 flex-1 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>

        {!compact ? (
          <div className="mt-3 rounded-xl border border-border bg-background/60 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">
              Sample accounts
            </p>
            <div className="mt-2.5 space-y-2">
              {SAMPLE_ACCOUNTS.map(({ label, icon: Icon, maskWidth }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 rounded-lg border border-border/70 bg-surface px-2.5 py-2"
                >
                  <Icon size={14} className="shrink-0 text-text-muted" />
                  <span className="text-[11px] text-text-muted">{label}</span>
                  <span className={`ml-auto h-2 ${maskWidth} rounded-full bg-border`} />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-3 rounded-xl border border-border bg-background/60 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">
            Demonstration insight
          </p>
          <div className="mt-2.5 space-y-2">
            <div className="h-2 w-4/5 rounded-full bg-border" />
            <div className="h-2 w-3/5 rounded-full bg-border" />
          </div>
        </div>

        {!compact ? (
          <div className="mt-3 flex items-center gap-3 rounded-full border border-border bg-background/60 px-4 py-2.5">
            <span className="flex-1 truncate text-[11px] text-text-muted">
              Example question &mdash; &ldquo;How much did I spend on subscriptions?&rdquo;
            </span>
            <Send size={13} className="shrink-0 text-text-muted opacity-50" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

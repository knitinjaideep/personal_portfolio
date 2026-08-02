interface ComingSoonPanelProps {
  label: string;
}

export default function ComingSoonPanel({ label }: ComingSoonPanelProps) {
  return (
    <div className="rounded-[2rem] border border-border bg-surface px-6 py-8 shadow-sm">
      <p className="text-sm uppercase tracking-[0.25em] text-status-coming-soon">Coming Soon</p>
      <h2 className="mt-3 text-2xl font-semibold text-text-primary">{label}</h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-text-muted">
        This page is intentionally reserved for future updates and will be filled with thoughtful details in later PRs.
      </p>
    </div>
  );
}

import StatusBadge from '@/components/ui/status-badge';

interface NotePlaceholderRowProps {
  title: string;
}

export default function NotePlaceholderRow({ title }: NotePlaceholderRowProps) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 sm:px-6 sm:py-5">
      <h2 className="text-sm font-semibold text-text-primary sm:text-base">{title}</h2>
      <StatusBadge variant="coming-soon" className="shrink-0">
        Coming Soon
      </StatusBadge>
    </article>
  );
}

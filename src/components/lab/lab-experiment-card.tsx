import type { LucideIcon } from 'lucide-react';
import StatusBadge from '@/components/ui/status-badge';

interface LabExperimentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function LabExperimentCard({
  title,
  description,
  icon: Icon,
}: LabExperimentCardProps) {
  return (
    <article className="flex flex-col rounded-[1.5rem] border border-dashed border-borderStrong bg-surface p-6">
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accentTint text-accent"
        >
          <Icon size={18} />
        </span>
        <StatusBadge variant="coming-soon">Coming Soon</StatusBadge>
      </div>

      <h2 className="mt-4 text-lg font-semibold text-text-primary">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-text-muted">{description}</p>
    </article>
  );
}

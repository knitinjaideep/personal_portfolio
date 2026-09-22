import type { ReactNode } from 'react';

interface StatusBadgeProps {
  children: ReactNode;
  className?: string;
}

export default function StatusBadge({ children, className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border border-status-active/20 bg-status-active/10 px-3 py-1 text-xs font-semibold text-status-active ${className}`}
    >
      {children}
    </span>
  );
}

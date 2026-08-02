import type { ReactNode } from 'react';

interface StatusBadgeProps {
  children: ReactNode;
  variant?: 'active' | 'coming-soon';
  className?: string;
}

const variantStyles = {
  active: 'bg-status-active/10 text-status-active border border-status-active/20',
  'coming-soon': 'bg-status-coming-soon/10 text-status-coming-soon border border-status-coming-soon/20',
};

export default function StatusBadge({ children, variant = 'coming-soon', className = '' }: StatusBadgeProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

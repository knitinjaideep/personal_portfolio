import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return <section className={`rounded-3xl bg-surface p-8 ${className}`}>{children}</section>;
}

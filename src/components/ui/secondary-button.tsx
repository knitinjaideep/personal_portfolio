import Link from 'next/link';
import type { ReactNode } from 'react';

interface SecondaryButtonProps {
  href: string;
  children: ReactNode;
}

export default function SecondaryButton({ href, children }: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {children}
    </Link>
  );
}

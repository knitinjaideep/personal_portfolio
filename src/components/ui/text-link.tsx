import Link from 'next/link';
import type { ReactNode } from 'react';

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function TextLink({ href, children, className = '' }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center py-1 font-medium text-accent transition hover:text-accentHover ${className}`}
    >
      {children}
    </Link>
  );
}

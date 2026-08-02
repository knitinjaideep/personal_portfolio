import Link from 'next/link';
import type { ReactNode } from 'react';

interface TextLinkProps {
  href: string;
  children: ReactNode;
}

export default function TextLink({ href, children }: TextLinkProps) {
  return (
    <Link
      href={href}
      className="font-medium text-accent transition hover:text-accentHover"
    >
      {children}
    </Link>
  );
}

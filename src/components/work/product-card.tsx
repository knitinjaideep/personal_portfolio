import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import StatusBadge from '@/components/ui/status-badge';

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  visual: ReactNode;
  headingLevel?: 'h2' | 'h3';
  meta?: string;
  status?: 'Active Development' | 'Coming Soon';
}

export default function ProductCard({
  title,
  description,
  href,
  visual,
  headingLevel = 'h3',
  meta,
  status = 'Active Development',
}: ProductCardProps) {
  const Heading = headingLevel;

  return (
    <article className="flex h-full min-h-[620px] flex-col rounded-[2rem] border border-border bg-surface p-6 shadow-glow sm:p-8">
      <StatusBadge variant={status === 'Active Development' ? 'active' : 'coming-soon'}>
        {status}
      </StatusBadge>

      <Heading className="mt-5 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {title}
      </Heading>

      <p className="mt-3 min-h-[5.25rem] max-w-lg text-sm leading-7 text-text-muted sm:text-base">
        {description}
      </p>

      <div className="mt-6 flex min-h-[300px] items-center">{visual}</div>

      {meta ? <p className="mt-4 text-xs text-text-muted">{meta}</p> : null}

      <div className="mt-auto pt-6">
        <Link
          href={href}
          className="inline-flex w-fit items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition duration-200 hover:scale-105 hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View case study <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

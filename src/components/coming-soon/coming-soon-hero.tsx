import type { ReactNode } from 'react';
import Container from '@/components/ui/container';
import StatusBadge from '@/components/ui/status-badge';
import Breadcrumb, { type BreadcrumbItem } from '@/components/ui/breadcrumb';

interface ComingSoonHeroProps {
  trail: BreadcrumbItem[];
  statusLabel: string;
  title: string;
  description: string;
  supportingStatement?: string;
  conceptListLabel?: string;
  conceptList?: string[];
  visual?: ReactNode;
}

export default function ComingSoonHero({
  trail,
  statusLabel,
  title,
  description,
  supportingStatement,
  conceptListLabel = 'Concept areas',
  conceptList,
  visual,
}: ComingSoonHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[26rem] w-[26rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, var(--purple-glow), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[20rem] w-[20rem] -translate-x-1/3 rounded-full blur-[110px]"
        style={{ background: 'radial-gradient(closest-side, var(--purple-glow), transparent)' }}
      />

      <Container className="relative pb-16 pt-8 sm:pb-20 sm:pt-10">
        <Breadcrumb items={trail} />

        <div
          className={`mt-10 grid grid-cols-1 gap-12 ${
            visual ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-10' : ''
          }`}
        >
          <div className="max-w-2xl">
            <StatusBadge variant="coming-soon">{statusLabel}</StatusBadge>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
              {description}
            </p>

            {supportingStatement ? (
              <p className="mt-5 max-w-xl text-sm leading-7 text-text-muted">
                {supportingStatement}
              </p>
            ) : null}

            {conceptList && conceptList.length > 0 ? (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  {conceptListLabel}
                </p>
                <ul className="mt-4 space-y-3">
                  {conceptList.map((concept) => (
                    <li
                      key={concept}
                      className="flex items-start gap-3 text-sm leading-6 text-text-primary sm:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {concept}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {visual ? <div>{visual}</div> : null}
        </div>
      </Container>
    </section>
  );
}

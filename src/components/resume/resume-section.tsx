import type { ReactNode } from 'react';

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mt-6 first:mt-0">
      <h2 className="border-b border-neutral-300 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-900">
        {title}
      </h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}

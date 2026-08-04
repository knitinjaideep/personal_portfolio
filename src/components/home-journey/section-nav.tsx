'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'the-problem', label: 'The Problem' },
  { id: 'journeys', label: 'Journeys' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'design-principles', label: 'Design Principles' },
  { id: 'whats-next', label: "What's Next" },
];

export default function HomeJourneySectionNav() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-112px 0px -70% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-6 overflow-x-auto whitespace-nowrap py-3 text-sm">
          {SECTIONS.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`inline-block border-b-2 pb-0.5 font-medium transition ${
                    isActive
                      ? 'border-accent text-accent'
                      : 'border-transparent text-text-muted hover:text-text-primary'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

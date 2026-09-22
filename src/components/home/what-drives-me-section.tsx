import { Camera, Code2, Lightbulb, Plane } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/container';

const AREAS: { title: string; description: string; href: string; icon: LucideIcon }[] = [
  {
    title: 'Software Engineering',
    description: 'Scalable systems that make a real impact.',
    href: '/work',
    icon: Code2,
  },
  {
    title: 'Personal Projects',
    description: 'Ideas that improve everyday life.',
    href: '/personal#projects',
    icon: Lightbulb,
  },
  {
    title: 'Photography',
    description: 'Capturing moments and new perspectives.',
    href: '/personal#photography',
    icon: Camera,
  },
  {
    title: 'Travel & Outdoors',
    description: 'Exploring new places and staying active.',
    href: '/personal#travel',
    icon: Plane,
  },
];

export default function WhatDrivesMeSection() {
  return (
    <section className="border-y border-border bg-background py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          What Drives Me
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          I like building things that solve problems I actually have.
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map(({ title, description, href, icon: Icon }, index) => (
            <Link
              key={title}
              href={href}
              className={`group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:border-l lg:border-border lg:pl-8 ${
                index === 0 ? 'lg:border-l-0 lg:pl-0' : ''
              }`}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accentTint text-accent transition group-hover:scale-105 group-hover:text-accentHover">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-text-primary">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-text-muted">{description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

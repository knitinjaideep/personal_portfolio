import type { Metadata } from 'next';
import HeroSection from '@/components/home/hero-section';
import WhatDrivesMeSection from '@/components/home/what-drives-me-section';
import ClosingSection from '@/components/home/closing-section';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Home',
  description:
    'Nitin Kotcherlakota is a senior software engineer building thoughtful software across professional systems, personal projects, and AI-assisted products.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatDrivesMeSection />
      <ClosingSection />
    </>
  );
}

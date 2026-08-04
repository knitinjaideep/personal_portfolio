import type { Metadata } from 'next';
import AboutIntroductionSection from '@/components/about/introduction-section';
import AboutPhilosophySection from '@/components/about/philosophy-section';
import AboutCurrentFocusSection from '@/components/about/current-focus-section';
import AboutTimelineSection from '@/components/about/timeline-section';
import ContactCta from '@/components/contact/contact-cta';

export const metadata: Metadata = {
  title: 'About — Nitin Kotcherlakota',
  description:
    'Nitin Kotcherlakota is a software engineer focused on building thoughtful products and growing deeper into AI systems engineering.',
};

export default function AboutPage() {
  return (
    <>
      <AboutIntroductionSection />
      <AboutPhilosophySection />
      <AboutCurrentFocusSection />
      <AboutTimelineSection />
      <ContactCta />
    </>
  );
}

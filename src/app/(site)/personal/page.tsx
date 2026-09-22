import type { Metadata } from 'next';
import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Personal',
  description: 'Personal projects, photography, travel, and life outside work.',
  path: '/personal',
});

export default function PersonalPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader
        eyebrow="Personal"
        title="Personal page coming in the next implementation phase."
        description="This page will collect the projects, photography, travel, and interests that sit outside the formal work portfolio."
      />
    </Container>
  );
}

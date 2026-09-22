import type { Metadata } from 'next';
import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import ContactCta from '@/components/contact/contact-cta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description: 'Ways to get in touch with Nitin Kotcherlakota.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Container className="py-16 sm:py-24">
        <SectionHeader
          eyebrow="Contact"
          title="Contact page coming in the next implementation phase."
          description="For now, the verified contact links below are the best way to reach out."
        />
      </Container>
      <ContactCta />
    </>
  );
}

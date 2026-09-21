import type { Metadata } from 'next';
import Container from '@/components/ui/container';
import ResumeWebIntroduction from '@/components/resume/resume-web-introduction';
import ResumeDocument from '@/components/resume/resume-document';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Résumé',
  description:
    'Professional résumé for Nitin Kotcherlakota — Senior Software Engineer building backend systems, financial capabilities, and AI-driven products.',
  path: '/resume',
});

export default function ResumePage() {
  return (
    <>
      <ResumeWebIntroduction />
      <section className="bg-background pb-16 sm:pb-24">
        <Container>
          <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-sm">
            <ResumeDocument className="px-6 py-8 sm:px-12 sm:py-12" />
          </div>
        </Container>
      </section>
    </>
  );
}

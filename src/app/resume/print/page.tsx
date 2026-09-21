import type { Metadata } from 'next';
import ResumeDocument from '@/components/resume/resume-document';

export const metadata: Metadata = {
  title: 'Nitin Kotcherlakota — Résumé',
  description: 'Printable, ATS-friendly résumé for Nitin Kotcherlakota.',
  robots: { index: false, follow: false },
};

// Deliberately outside the (site) route group: no header, footer, nav, theme
// toggle, or animation should ever render here. This is the single layout
// the PDF-generation script (scripts/generate-resume-pdf.mjs) captures, and
// it must also work as a plain browser print target (Cmd/Ctrl+P).
export default function ResumePrintPage() {
  return (
    <div className="resume-print-page min-h-screen bg-white px-8 py-10 text-neutral-900 sm:px-12">
      <ResumeDocument className="mx-auto max-w-[7.5in]" />
    </div>
  );
}

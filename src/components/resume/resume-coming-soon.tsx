import { FileText } from 'lucide-react';
import StatusBadge from '@/components/ui/status-badge';
import SecondaryButton from '@/components/ui/secondary-button';

// TODO(resume): once the real résumé exists, add it at
// public/nitin-kotcherlakota-resume.pdf and set profile.resumePath /
// profile.resumeFileType in src/content/profile.ts. This panel will stop
// rendering automatically once resumePath is set — see src/app/resume/page.tsx.
export default function ResumeComingSoon() {
  return (
    <div className="rounded-[2rem] border border-border bg-surface px-6 py-12 text-center sm:px-10 sm:py-16">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surfaceElevated text-accent">
        <FileText aria-hidden="true" size={24} />
      </div>
      <div className="mt-6 flex justify-center">
        <StatusBadge variant="coming-soon">Coming Soon</StatusBadge>
      </div>
      <p className="mx-auto mt-4 max-w-md text-base leading-7 text-text-muted">
        A downloadable résumé will be available here soon.
      </p>
      <div className="mt-8 flex justify-center">
        <SecondaryButton href="/about">Get in touch instead</SecondaryButton>
      </div>
    </div>
  );
}

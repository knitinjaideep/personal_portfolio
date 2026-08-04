import type { Metadata } from 'next';
import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import ResumeAvailable from '@/components/resume/resume-available';
import ResumeComingSoon from '@/components/resume/resume-coming-soon';
import { profile } from '@/content/profile';

export const metadata: Metadata = {
  title: 'Résumé — Nitin Kotcherlakota',
  description: 'A downloadable résumé for Nitin Kotcherlakota.',
};

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader title="Résumé" />
      <div className="mt-10">
        {profile.resumePath ? (
          <ResumeAvailable
            name={profile.name}
            resumePath={profile.resumePath}
            resumeFileType={profile.resumeFileType}
          />
        ) : (
          <ResumeComingSoon />
        )}
      </div>
    </Container>
  );
}

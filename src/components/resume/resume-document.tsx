import { resume } from '@/content/resume';
import ResumeHeader from '@/components/resume/resume-header';
import ResumeSection from '@/components/resume/resume-section';
import ExperienceEntry from '@/components/resume/experience-entry';
import ProjectEntry from '@/components/resume/project-entry';
import EducationEntry from '@/components/resume/education-entry';
import SkillGroups from '@/components/resume/skill-groups';

interface ResumeDocumentProps {
  className?: string;
}

/**
 * The one paper-style résumé layout. It is rendered as-is inside the /resume
 * web page (inside a card) and inside /resume/print (full page, no card) so
 * every surface reads from the same src/content/resume.ts data. Colors are
 * hardcoded neutrals rather than theme tokens on purpose: the résumé "paper"
 * must stay white/black regardless of the site's light/dark theme.
 */
export default function ResumeDocument({ className = '' }: ResumeDocumentProps) {
  return (
    <div className={`bg-white text-neutral-900 ${className}`}>
      <ResumeHeader contact={resume.contact} />

      <ResumeSection title="Professional Summary">
        <p className="text-[11.5px] leading-[1.6] text-neutral-800">{resume.summary}</p>
      </ResumeSection>

      <ResumeSection title="Technical Skills">
        <SkillGroups groups={resume.skills} />
      </ResumeSection>

      <ResumeSection title="Professional Experience">
        {resume.experience.map((entry) => (
          <ExperienceEntry key={`${entry.company}-${entry.dateRange}`} entry={entry} />
        ))}
      </ResumeSection>

      {resume.projects.length > 0 ? (
        <ResumeSection title="Selected Projects">
          {resume.projects.map((entry) => (
            <ProjectEntry key={entry.name} entry={entry} />
          ))}
        </ResumeSection>
      ) : null}

      <ResumeSection title="Education">
        {resume.education.map((entry) => (
          <EducationEntry key={entry.institution} entry={entry} />
        ))}
      </ResumeSection>

      {resume.certifications.length > 0 ? (
        <ResumeSection title="Certifications">
          {resume.certifications.map((cert) => (
            <p key={cert.name} className="text-[11.5px] text-neutral-800">
              {cert.name} — {cert.issuer}
            </p>
          ))}
        </ResumeSection>
      ) : null}
    </div>
  );
}

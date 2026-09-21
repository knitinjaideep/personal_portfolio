// Generates resume/nitin-kotcherlakota-resume.txt from the shared résumé
// content so the plain-text copy can never drift from the web/print/PDF
// output. Plain ASCII structure only — no Markdown syntax — so it pastes
// cleanly into application-tracking-system text fields.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { resume } from '../src/content/resume';
import { stripProtocol } from '../src/lib/resume/format';

function buildPlainText(): string {
  const { contact } = resume;
  const lines: string[] = [];

  lines.push(contact.name);
  lines.push(contact.headline);
  lines.push(
    [
      contact.location,
      contact.email,
      contact.phone,
      stripProtocol(contact.linkedinUrl),
      stripProtocol(contact.portfolioUrl),
      contact.githubUrl ? stripProtocol(contact.githubUrl) : null,
    ]
      .filter(Boolean)
      .join(' | '),
  );
  lines.push('');

  lines.push('PROFESSIONAL SUMMARY');
  lines.push(resume.summary);
  lines.push('');

  lines.push('TECHNICAL SKILLS');
  for (const group of resume.skills) {
    lines.push(`${group.title}: ${group.skills.join(', ')}`);
  }
  lines.push('');

  lines.push('PROFESSIONAL EXPERIENCE');
  for (const entry of resume.experience) {
    lines.push(`${entry.title}, ${entry.company}`);
    lines.push([entry.dateRange, entry.location].filter(Boolean).join(' | '));
    for (const bullet of entry.bullets) {
      lines.push(`- ${bullet}`);
    }
    lines.push('');
  }

  if (resume.projects.length > 0) {
    lines.push('SELECTED PROJECTS');
    for (const entry of resume.projects) {
      lines.push(`${entry.name} - ${entry.status}`);
      lines.push(entry.description);
      for (const bullet of entry.bullets) {
        lines.push(`- ${bullet}`);
      }
      lines.push('');
    }
  }

  lines.push('EDUCATION');
  for (const entry of resume.education) {
    lines.push(`${entry.institution} - ${entry.credential} - ${entry.years}`);
  }

  if (resume.certifications.length > 0) {
    lines.push('');
    lines.push('CERTIFICATIONS');
    for (const cert of resume.certifications) {
      lines.push(`${cert.name} - ${cert.issuer}`);
    }
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

async function main() {
  const outputPath = path.join(process.cwd(), 'resume', 'nitin-kotcherlakota-resume.txt');
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buildPlainText(), 'utf8');
  console.log(`Plain-text résumé written to ${path.relative(process.cwd(), outputPath)}`);
}

main();

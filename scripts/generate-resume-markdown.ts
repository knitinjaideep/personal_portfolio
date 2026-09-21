// Generates resume/nitin-kotcherlakota-resume.md from the shared résumé
// content so the Markdown copy can never drift from the web/print/PDF
// output.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { resume } from '../src/content/resume';
import { stripProtocol } from '../src/lib/resume/format';

function buildMarkdown(): string {
  const { contact } = resume;
  const lines: string[] = [];

  lines.push(`# ${contact.name}`);
  lines.push('');
  lines.push(contact.headline);
  lines.push('');
  lines.push(
    [
      contact.location,
      contact.email ? `[${contact.email}](mailto:${contact.email})` : null,
      contact.phone,
      `[${stripProtocol(contact.linkedinUrl)}](${contact.linkedinUrl})`,
      `[${stripProtocol(contact.portfolioUrl)}](${contact.portfolioUrl})`,
      contact.githubUrl ? `[${stripProtocol(contact.githubUrl)}](${contact.githubUrl})` : null,
    ]
      .filter(Boolean)
      .join(' · '),
  );
  lines.push('');

  lines.push('## Professional Summary');
  lines.push('');
  lines.push(resume.summary);
  lines.push('');

  lines.push('## Technical Skills');
  lines.push('');
  for (const group of resume.skills) {
    lines.push(`- **${group.title}:** ${group.skills.join(', ')}`);
  }
  lines.push('');

  lines.push('## Professional Experience');
  lines.push('');
  for (const entry of resume.experience) {
    lines.push(`### ${entry.title}, ${entry.company}`);
    lines.push('');
    lines.push([entry.dateRange, entry.location].filter(Boolean).join(' — '));
    lines.push('');
    for (const bullet of entry.bullets) {
      lines.push(`- ${bullet}`);
    }
    lines.push('');
  }

  if (resume.projects.length > 0) {
    lines.push('## Selected Projects');
    lines.push('');
    for (const entry of resume.projects) {
      lines.push(`### ${entry.name} — ${entry.status}`);
      lines.push('');
      lines.push(entry.description);
      lines.push('');
      for (const bullet of entry.bullets) {
        lines.push(`- ${bullet}`);
      }
      lines.push('');
    }
  }

  lines.push('## Education');
  lines.push('');
  for (const entry of resume.education) {
    lines.push(`- **${entry.institution}** — ${entry.credential} (${entry.years})`);
  }

  if (resume.certifications.length > 0) {
    lines.push('');
    lines.push('## Certifications');
    lines.push('');
    for (const cert of resume.certifications) {
      lines.push(`- ${cert.name} — ${cert.issuer}`);
    }
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

async function main() {
  const outputPath = path.join(process.cwd(), 'resume', 'nitin-kotcherlakota-resume.md');
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buildMarkdown(), 'utf8');
  console.log(`Markdown résumé written to ${path.relative(process.cwd(), outputPath)}`);
}

main();

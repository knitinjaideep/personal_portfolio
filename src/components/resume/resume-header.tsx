import type { ReactNode } from 'react';
import type { ResumeContact } from '@/content/resume';
import { stripProtocol } from '@/lib/resume/format';

interface ResumeHeaderProps {
  contact: ResumeContact;
}

export default function ResumeHeader({ contact }: ResumeHeaderProps) {
  const items: { key: string; node: ReactNode }[] = [];

  if (contact.location) {
    items.push({ key: 'location', node: contact.location });
  }
  if (contact.email) {
    items.push({
      key: 'email',
      node: (
        <a href={`mailto:${contact.email}`} className="underline-offset-2 hover:underline">
          {contact.email}
        </a>
      ),
    });
  }
  if (contact.phone) {
    items.push({ key: 'phone', node: contact.phone });
  }
  items.push({
    key: 'linkedin',
    node: (
      <a
        href={contact.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-2 hover:underline"
      >
        {stripProtocol(contact.linkedinUrl)}
      </a>
    ),
  });
  items.push({
    key: 'portfolio',
    node: (
      <a
        href={contact.portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-2 hover:underline"
      >
        {stripProtocol(contact.portfolioUrl)}
      </a>
    ),
  });
  if (contact.githubUrl) {
    items.push({
      key: 'github',
      node: (
        <a
          href={contact.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          {stripProtocol(contact.githubUrl)}
        </a>
      ),
    });
  }

  return (
    <header className="border-b border-neutral-300 pb-4">
      <h1 className="text-[24px] font-bold tracking-tight text-neutral-900">{contact.name}</h1>
      <p className="mt-1 text-[13px] font-medium text-neutral-700">{contact.headline}</p>
      {/* Real " · " separator characters, not just flex `gap`, so PDF text
          extraction (ATS parsers) doesn't concatenate items with no space
          between them, e.g. "AreaNitin@gmail.com". */}
      <p className="mt-3 flex flex-wrap items-center gap-y-1 text-[11px] text-neutral-600">
        {items.map(({ key, node }, index) => (
          <span key={key} className="flex items-center">
            {index > 0 ? <span aria-hidden="true" className="mx-2 text-neutral-400">·</span> : null}
            {node}
          </span>
        ))}
      </p>
    </header>
  );
}

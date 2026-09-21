import type { ResumeProjectEntry } from '@/content/resume';

interface ProjectEntryProps {
  entry: ResumeProjectEntry;
}

export default function ProjectEntry({ entry }: ProjectEntryProps) {
  return (
    <article className="break-inside-avoid">
      <h3 className="text-[13px] font-semibold text-neutral-900">
        {entry.name} — {entry.status}
      </h3>
      <p className="mt-1 text-[11.5px] leading-[1.5] text-neutral-700">{entry.description}</p>
      {entry.bullets.length > 0 ? (
        <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[11.5px] leading-[1.5] text-neutral-800">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

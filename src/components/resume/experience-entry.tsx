import type { ResumeExperienceEntry } from '@/content/resume';

interface ExperienceEntryProps {
  entry: ResumeExperienceEntry;
}

export default function ExperienceEntry({ entry }: ExperienceEntryProps) {
  return (
    <article className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
        <h3 className="text-[13px] font-semibold text-neutral-900">
          {entry.title} — {entry.company}
        </h3>
        <p className="whitespace-nowrap text-[11px] font-medium text-neutral-600">
          {entry.dateRange}
        </p>
      </div>
      {entry.location ? <p className="text-[11px] text-neutral-500">{entry.location}</p> : null}
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

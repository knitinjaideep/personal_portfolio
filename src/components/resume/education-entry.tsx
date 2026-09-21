import type { ResumeEducationEntry } from '@/content/resume';

interface EducationEntryProps {
  entry: ResumeEducationEntry;
}

export default function EducationEntry({ entry }: EducationEntryProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 break-inside-avoid">
      <div>
        <h3 className="text-[13px] font-semibold text-neutral-900">{entry.institution}</h3>
        <p className="text-[11.5px] text-neutral-700">{entry.credential}</p>
      </div>
      <p className="whitespace-nowrap text-[11px] font-medium text-neutral-600">{entry.years}</p>
    </div>
  );
}

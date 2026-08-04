import type { ResumeSkillGroup } from '@/content/resume';

interface SkillGroupsProps {
  groups: ResumeSkillGroup[];
}

export default function SkillGroups({ groups }: SkillGroupsProps) {
  return (
    <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title}>
          <dt className="text-[11px] font-semibold text-neutral-900">{group.title}</dt>
          <dd className="text-[11.5px] leading-[1.5] text-neutral-700">
            {group.skills.join(', ')}
          </dd>
        </div>
      ))}
    </dl>
  );
}

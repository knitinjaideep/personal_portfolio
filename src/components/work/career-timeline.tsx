'use client';

import { ArrowLeft, ArrowRight, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import type { ResumeEducationEntry, ResumeExperienceEntry } from '@/content/resume';
import { resume } from '@/content/resume';

type ChapterKind = 'education' | 'experience';

interface TimelineChapter {
  id: string;
  kind: ChapterKind;
  period: string;
  title: string;
  organization: string;
  subtitle: string;
  location?: string | null;
  isCurrent?: boolean;
  entry: ResumeEducationEntry | ResumeExperienceEntry;
}

const COMPANY_IDS: Record<string, string> = {
  JPMorganChase: 'jpmorgan',
  Intuit: 'intuit',
  IGT: 'igt',
  'Sagitec Solutions': 'sagitec',
  'Pitney Bowes': 'pitney-bowes',
};

const EDUCATION_IDS: Record<string, string> = {
  'Jawaharlal Nehru Technological University': 'jntu',
  'Northern Illinois University': 'niu',
};

const TECHNOLOGIES = {
  intuit: [
    'Java',
    'Spring Boot',
    'Kotlin',
    'PostgreSQL',
    'Kafka',
    'AWS',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Argo CD',
  ],
  sagitec: ['C#', 'Python', 'JavaScript', 'T-SQL', '.NET'],
  pitney: ['Python', 'Pandas', 'XLRD', 'T-SQL'],
};

const CURRENT_FOCUS = [
  'Scalable systems',
  'Platform design',
  'Developer experience',
  'Reliable automation',
  'AI-assisted engineering',
];

function compactDateRange(dateRange: string) {
  const years = dateRange.match(/\d{4}|Present/g);
  if (!years || years.length === 0) return dateRange;
  const first = years[0];
  const last = years[years.length - 1];
  return first === last ? first : `${first} – ${last}`;
}

function splitCredential(credential: string) {
  const [degree, field] = credential.split(',').map((part) => part.trim());
  return {
    degree: degree.replace('Bachelor of Engineering', 'B.E.').replace('Master of Science', 'M.S.'),
    field: field ?? credential,
  };
}

function findExperience(company: string) {
  const entry = resume.experience.find((item) => item.company === company);
  if (!entry) throw new Error(`Missing resume experience for ${company}`);
  return entry;
}

function findEducation(institution: string) {
  const entry = resume.education.find((item) => item.institution === institution);
  if (!entry) throw new Error(`Missing resume education for ${institution}`);
  return entry;
}

function buildChapters(): TimelineChapter[] {
  const jntu = findEducation('Jawaharlal Nehru Technological University');
  const niu = findEducation('Northern Illinois University');
  const pitney = findExperience('Pitney Bowes');
  const sagitec = findExperience('Sagitec Solutions');
  const igt = findExperience('IGT');
  const intuit = findExperience('Intuit');
  const jpmorgan = findExperience('JPMorganChase');

  const educationChapter = (entry: ResumeEducationEntry): TimelineChapter => {
    const credential = splitCredential(entry.credential);
    return {
      id: EDUCATION_IDS[entry.institution],
      kind: 'education',
      period: entry.years,
      title: credential.degree,
      organization: entry.institution,
      subtitle: credential.field,
      entry,
    };
  };

  const experienceChapter = (entry: ResumeExperienceEntry, isCurrent = false): TimelineChapter => ({
    id: COMPANY_IDS[entry.company],
    kind: 'experience',
    period: compactDateRange(entry.dateRange),
    title: entry.title,
    organization: entry.company,
    subtitle: entry.title,
    location: entry.location,
    isCurrent,
    entry,
  });

  return [
    educationChapter(jntu),
    educationChapter(niu),
    experienceChapter(pitney),
    experienceChapter(sagitec),
    experienceChapter(igt),
    experienceChapter(intuit),
    experienceChapter(jpmorgan, true),
  ];
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ChapterBody({ chapter }: { chapter: TimelineChapter }) {
  const entry = chapter.entry;

  if (chapter.kind === 'education') {
    const education = entry as ResumeEducationEntry;
    const credential = splitCredential(education.credential);
    return (
      <div className="mt-8 rounded-[1.5rem] border border-border bg-surface p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {education.years}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
          {education.institution}
        </h3>
        <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-text-primary">Degree</dt>
            <dd className="mt-1 text-text-muted">{credential.degree}</dd>
          </div>
          <div>
            <dt className="font-semibold text-text-primary">Field</dt>
            <dd className="mt-1 text-text-muted">{credential.field}</dd>
          </div>
        </dl>
      </div>
    );
  }

  const experience = entry as ResumeExperienceEntry;

  if (chapter.id === 'jpmorgan') {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-semibold tracking-tight text-text-primary">
          The current chapter.
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
          Working on enterprise software in financial services while continuing to deepen my focus
          on scalable systems, platform design, developer experience, and AI-assisted engineering.
        </p>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Currently focused on
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {CURRENT_FOCUS.map((item) => (
            <li key={item} className="flex items-center gap-3 text-base text-text-primary">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (chapter.id === 'intuit') {
    const highlights = [
      {
        value: '45 minutes → seconds',
        text: experience.bullets[0],
      },
      {
        value: '32 operational-risk rules',
        text: experience.bullets[1],
      },
      {
        value: '~70%',
        text: experience.bullets[2],
      },
    ];

    return (
      <div className="mt-8">
        <div className="divide-y divide-border border-y border-border">
          {highlights.map((highlight) => (
            <div key={highlight.value} className="py-6">
              <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                {highlight.value}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted">{highlight.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-text-muted">
          Also supported recurring cryptocurrency purchases, customer tax-form delivery workflows,
          and AWS-backed operational alerting.
        </p>
        <TechList items={TECHNOLOGIES.intuit} />
      </div>
    );
  }

  if (chapter.id === 'sagitec') {
    return (
      <div className="mt-8 space-y-6">
        <p className="max-w-2xl text-base leading-7 text-text-muted">
          Built unemployment-insurance system features across user registration, wage submission,
          claim submission, reporting, correspondence generation, and BPM workflows.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.25rem] border border-border bg-surface p-5">
            <p className="font-semibold text-text-primary">Major system areas</p>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              Claims, wage submissions, self-service reporting, correspondence, and scheduled batch
              jobs.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-surface p-5">
            <p className="font-semibold text-text-primary">Database performance</p>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              Analyzed query plans and data models to identify and improve slow-running database
              queries.
            </p>
          </div>
        </div>
        <TechList items={TECHNOLOGIES.sagitec} />
      </div>
    );
  }

  if (chapter.id === 'pitney-bowes') {
    return (
      <div className="mt-8">
        <p className="max-w-2xl text-base leading-7 text-text-muted">
          Built Python scripts using Pandas and XLRD to transform Excel data into structured formats
          for daily ad hoc reporting, and wrote T-SQL stored procedures to support reporting
          workflows.
        </p>
        <TechList items={TECHNOLOGIES.pitney} />
      </div>
    );
  }

  return (
    <div className="mt-8">
      <p className="max-w-2xl text-base leading-7 text-text-muted">
        Public details for this chapter are intentionally concise: the verified record currently
        includes title, company, dates, and location only.
      </p>
    </div>
  );
}

export default function CareerTimeline() {
  const chapters = useMemo(() => buildChapters(), []);
  const latestChapter = chapters[chapters.length - 1];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const chapterRef = useRef<HTMLElement>(null);

  const selectedId = searchParams.get('chapter');
  const selectedChapter = chapters.find((chapter) => chapter.id === selectedId) ?? latestChapter;
  const selectedIndex = chapters.findIndex((chapter) => chapter.id === selectedChapter.id);
  const previousChapter = selectedIndex > 0 ? chapters[selectedIndex - 1] : null;
  const nextChapter = selectedIndex < chapters.length - 1 ? chapters[selectedIndex + 1] : null;

  useEffect(() => {
    if (selectedId && selectedId !== selectedChapter.id) {
      router.replace(`${pathname}?chapter=${latestChapter.id}`, { scroll: false });
    }
  }, [latestChapter.id, pathname, router, selectedChapter.id, selectedId]);

  function selectChapter(id: string, scrollToChapter = false) {
    router.push(`${pathname}?chapter=${id}`, { scroll: false });
    const shouldScroll = scrollToChapter && !window.matchMedia('(min-width: 1024px)').matches;
    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        chapterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(260px,0.35fr)_minmax(0,0.65fr)] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Timeline</h2>
        <ol className="mt-8 space-y-0 border-l border-border pl-6">
          {chapters.map((chapter) => {
            const isSelected = chapter.id === selectedChapter.id;
            const Icon = chapter.kind === 'education' ? GraduationCap : BriefcaseBusiness;
            return (
              <li key={chapter.id} className="relative pb-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[1.92rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-background transition ${
                    isSelected
                      ? 'border-accent shadow-[0_0_0_6px_var(--purple-glow)]'
                      : 'border-borderStrong'
                  }`}
                />
                <button
                  type="button"
                  aria-label={`${chapter.period}: ${chapter.title}, ${chapter.organization}`}
                  aria-current={isSelected ? 'step' : undefined}
                  aria-pressed={isSelected}
                  onClick={() => selectChapter(chapter.id, true)}
                  className={`group w-full rounded-2xl px-3 py-2 text-left transition hover:bg-surfaceElevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isSelected ? 'bg-surfaceElevated' : ''
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      isSelected ? 'text-accent' : 'text-text-muted group-hover:text-accent'
                    }`}
                  >
                    {chapter.period}
                  </span>
                  <span className="mt-2 flex items-start gap-3">
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className={`mt-1 shrink-0 ${isSelected ? 'text-accent' : 'text-text-muted'}`}
                    />
                    <span>
                      <span
                        className={`block font-semibold ${
                          isSelected ? 'text-text-primary' : 'text-text-primary'
                        }`}
                      >
                        {chapter.title}
                      </span>
                      <span className="mt-0.5 block text-sm leading-6 text-text-muted">
                        {chapter.organization}
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <section ref={chapterRef} aria-live="polite" className="scroll-mt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          {selectedChapter.period}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h2 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            {selectedChapter.organization}
          </h2>
          {selectedChapter.isCurrent ? (
            <span className="rounded-full bg-accentTint px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Current
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-2xl font-medium text-text-primary">{selectedChapter.subtitle}</p>
        {selectedChapter.location ? (
          <p className="mt-2 text-sm text-text-muted">{selectedChapter.location}</p>
        ) : null}

        <ChapterBody chapter={selectedChapter} />

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
          <button
            type="button"
            disabled={!previousChapter}
            onClick={() => previousChapter && selectChapter(previousChapter.id)}
            className="inline-flex items-center gap-2 rounded-full px-1 py-2 text-sm font-semibold text-text-primary transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>
              Previous
              <span className="block text-xs font-medium text-text-muted">
                {previousChapter?.organization ?? '—'}
              </span>
            </span>
          </button>
          <button
            type="button"
            disabled={!nextChapter}
            onClick={() => nextChapter && selectChapter(nextChapter.id)}
            className="inline-flex items-center gap-2 rounded-full px-1 py-2 text-right text-sm font-semibold text-text-primary transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span>
              Next
              <span className="block text-xs font-medium text-text-muted">
                {nextChapter?.organization ?? '—'}
              </span>
            </span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}

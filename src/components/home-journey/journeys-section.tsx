import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  ClipboardCheck,
  DoorOpen,
  FileSignature,
  Home,
  KeyRound,
  Landmark,
  Search,
  Users,
  Wallet,
  CalendarClock,
  FileText,
  FolderKanban,
  Hammer,
  NotebookPen,
  PlugZap,
  Receipt,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Container from '@/components/ui/container';

type JourneyArea = { label: string; icon: LucideIcon };

const BUYING_AREAS: JourneyArea[] = [
  { label: 'Research', icon: Search },
  { label: 'Budget notes', icon: Wallet },
  { label: 'Neighborhood comparisons', icon: Building2 },
  { label: 'Property search', icon: Home },
  { label: 'Open-house notes', icon: DoorOpen },
  { label: 'Offer tracking', icon: FileSignature },
  { label: 'Inspection notes', icon: ClipboardCheck },
  { label: 'Mortgage tasks', icon: Landmark },
  { label: 'Closing tasks', icon: KeyRound },
  { label: 'Important contacts', icon: Users },
];

const OWNING_AREAS: JourneyArea[] = [
  { label: 'Maintenance', icon: Wrench },
  { label: 'Repairs', icon: Hammer },
  { label: 'Documents', icon: FileText },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Appliances', icon: PlugZap },
  { label: 'Warranties', icon: ShieldCheck },
  { label: 'Expenses', icon: Receipt },
  { label: 'Property notes', icon: NotebookPen },
  { label: 'Seasonal reminders', icon: CalendarClock },
];

function JourneyCard({
  eyebrow,
  title,
  description,
  areas,
  tone,
}: {
  eyebrow: string;
  title: string;
  description: string;
  areas: JourneyArea[];
  tone: 'accent' | 'warm';
}) {
  const toneClasses =
    tone === 'accent'
      ? { chip: 'text-accent', border: 'border-accent/20 hover:border-accent/40' }
      : { chip: 'text-warm', border: 'border-warm/20 hover:border-warm/40' };

  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
      <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${toneClasses.chip}`}>
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-7 text-text-muted sm:text-base">{description}</p>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
        Potential areas this journey is designed to support
      </p>
      <ul className="mt-3 grid grid-cols-2 gap-2.5">
        {areas.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className={`flex items-center gap-2 rounded-xl border bg-background/60 px-3 py-2.5 text-xs font-medium text-text-primary transition ${toneClasses.border}`}
          >
            <Icon size={14} className={`shrink-0 ${toneClasses.chip}`} aria-hidden="true" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function HomeJourneyJourneysSection() {
  return (
    <section id="journeys" className="scroll-mt-28 bg-background py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Journeys</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          Two journeys, one continuous record
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
          Home Journey is designed around where someone actually is: still searching, or already
          settled in. Both paths feed the same ongoing home record.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <JourneyCard
            eyebrow="I'm buying a home"
            title="Stay organized from searching to closing"
            description="Product direction for keeping research, budgets, and decisions in one place while a home search is underway."
            areas={BUYING_AREAS}
            tone="accent"
          />
          <JourneyCard
            eyebrow="I own a home"
            title="Everything to manage and improve a home"
            description="Product direction for continuing the record after closing, as a home is maintained, repaired, and improved."
            areas={OWNING_AREAS}
            tone="warm"
          />
        </div>
      </Container>
    </section>
  );
}

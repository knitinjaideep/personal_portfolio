import { FileText, Home, KeyRound, LayoutGrid, NotebookPen, Users } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Overview', icon: LayoutGrid, active: true },
  { label: 'Notes', icon: NotebookPen, active: false },
  { label: 'Documents', icon: FileText, active: false },
  { label: 'Contacts', icon: Users, active: false },
];

const BUYING_NOTES = ['Neighborhood notes', 'Budget notes', 'Offer tracking'];
const OWNING_NOTES = ['Maintenance log', 'Warranty tracker', 'Property notes'];

/**
 * Fixed light "device chrome" regardless of site theme — this represents a
 * preview of the product's own interface, not the portfolio's dark/light mode.
 */
export default function HomeJourneyProductPreview() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[420px] select-none">
      <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-[1.75rem] border border-black/5 bg-white/60 sm:block" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-glow">
        <div className="flex items-center gap-2 border-b border-black/10 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e2a06b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d6cfe5]" />
          <span className="ml-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Home Journey
          </span>
        </div>

        <div className="flex">
          <div className="flex w-32 shrink-0 flex-col gap-1 border-r border-black/10 p-3">
            {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                  active ? 'bg-[#f3effc] text-[#6d28d9]' : 'text-slate-500'
                }`}
              >
                <Icon size={13} aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>

          <div className="flex-1 space-y-4 p-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                Choose your journey
              </p>
              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border-2 border-[#8b5cf6] bg-[#f3effc] p-3">
                  <KeyRound size={16} className="text-[#6d28d9]" aria-hidden="true" />
                  <p className="mt-2 text-[11px] font-semibold leading-tight text-slate-800">
                    I&rsquo;m buying
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <Home size={16} className="text-[#b5602e]" aria-hidden="true" />
                  <p className="mt-2 text-[11px] font-semibold leading-tight text-slate-800">
                    I own a home
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                Recent notes
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {BUYING_NOTES.map((note) => (
                  <li
                    key={note}
                    className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-2 text-[11px] text-slate-600"
                  >
                    <NotebookPen size={12} className="shrink-0 text-[#8b5cf6]" aria-hidden="true" />
                    <span className="truncate">{note}</span>
                  </li>
                ))}
                {OWNING_NOTES.slice(0, 1).map((note) => (
                  <li
                    key={note}
                    className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-2 text-[11px] text-slate-600"
                  >
                    <NotebookPen size={12} className="shrink-0 text-[#b5602e]" aria-hidden="true" />
                    <span className="truncate">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

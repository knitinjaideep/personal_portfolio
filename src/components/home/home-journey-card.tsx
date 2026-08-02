import { ArrowRight } from 'lucide-react';
import StatusBadge from '@/components/ui/status-badge';
import TextLink from '@/components/ui/text-link';

function BuyingHomeIcon() {
  return (
    <svg viewBox="0 0 64 48" className="h-12 w-auto" fill="none" aria-hidden="true">
      <polyline
        points="4,32 4,24 20,12 36,24 36,32"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <rect
        x="14"
        y="24"
        width="12"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.75"
        opacity="0.55"
      />
      <polyline
        points="40,34 44,30 48,32 52,26 56,28"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OwnedHomeIcon() {
  return (
    <svg viewBox="0 0 64 48" className="h-12 w-auto" fill="none" aria-hidden="true">
      <polyline
        points="6,34 6,20 26,6 46,20 46,34"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="18"
        y="22"
        width="16"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <rect x="22" y="26" width="3.5" height="8" rx="0.75" fill="currentColor" />
      <rect x="37" y="26" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <polyline
        points="50,36 54,32 58,34"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomeJourneyCard() {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-border bg-surface p-6 shadow-glow sm:p-8">
      <StatusBadge variant="active">Active Development</StatusBadge>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        Home Journey
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-7 text-text-muted sm:text-base">
        A notes-first platform that helps people organize the journey from buying a home to owning
        and maintaining it.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background/60 p-4">
          <p className="text-sm font-semibold text-text-primary">I&rsquo;m buying a home</p>
          <div className="mt-4 text-accent/60">
            <BuyingHomeIcon />
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-background/60 p-4">
          <p className="text-sm font-semibold text-text-primary">I own a home</p>
          <div className="mt-4 text-accent">
            <OwnedHomeIcon />
          </div>
        </div>
      </div>

      <TextLink href="/work/home-journey" className="mt-6 inline-flex items-center gap-1.5">
        View case study <ArrowRight size={16} aria-hidden="true" />
      </TextLink>
    </article>
  );
}

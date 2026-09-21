import ProductCard from '@/components/work/product-card';

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
    <ProductCard
      title="Home Journey"
      description="A notes-first platform that helps people organize the journey from buying a home to owning and maintaining it."
      href="/work/home-journey"
      visual={
        <div className="grid w-full gap-3 sm:grid-cols-2">
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
      }
    />
  );
}

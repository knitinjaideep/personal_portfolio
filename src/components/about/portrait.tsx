import Image from 'next/image';
import nitinPortraitImage from '@/assets/images/nitin-portrait.jpg';

interface PortraitProps {
  name: string;
  initials: string;
  // Only one approved portrait exists in this repository, so this string is
  // a "portrait available" flag rather than a literal image src — the file
  // lives under src/assets (not public/), so it must be loaded through
  // Next.js static image import rather than a plain string src.
  portraitPath: string | null;
}

export default function Portrait({ name, initials, portraitPath }: PortraitProps) {
  if (portraitPath) {
    return (
      <div className="relative aspect-[4/5] w-full">
        <div
          aria-hidden="true"
          className="absolute -inset-2.5 -z-10 rounded-[2rem] border border-accent/20"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-sm">
          <Image
            src={nitinPortraitImage}
            alt={`Portrait of ${name}`}
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
            style={{ objectPosition: '50% 58%' }}
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${name} — portrait not yet available. Shown instead: initials ${initials}.`}
      className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-surface"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-accentTint via-surface to-purpleGlow/40"
      />
      <div
        aria-hidden="true"
        className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-purpleGlow/30 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="relative text-6xl font-semibold tracking-tight text-accent"
      >
        {initials}
      </span>
    </div>
  );
}

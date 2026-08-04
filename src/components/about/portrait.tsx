import Image from 'next/image';

interface PortraitProps {
  name: string;
  initials: string;
  portraitPath: string | null;
}

export default function Portrait({ name, initials, portraitPath }: PortraitProps) {
  if (portraitPath) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-surface">
        <Image
          src={portraitPath}
          alt={`Portrait of ${name}`}
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover"
          priority
        />
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

interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
}

export default function SectionHeader({ title, eyebrow, description }: SectionHeaderProps) {
  return (
    <header className="space-y-4">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.24em] text-text-muted">{eyebrow}</p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-3xl text-base leading-8 text-text-muted">{description}</p>
      ) : null}
    </header>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  status?: string;
}

export default function ProjectCard({ title, description, status }: ProjectCardProps) {
  return (
    <article className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
        {status ? (
          <span className="rounded-full bg-status-coming-soon/10 px-3 py-1 text-xs font-semibold text-status-coming-soon">{status}</span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-text-muted">{description}</p>
    </article>
  );
}

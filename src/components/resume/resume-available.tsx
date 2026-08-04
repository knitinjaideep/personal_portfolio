import { FileText, ExternalLink, Download } from 'lucide-react';

interface ResumeAvailableProps {
  name: string;
  resumePath: string;
  resumeFileType: string | null;
}

export default function ResumeAvailable({
  name,
  resumePath,
  resumeFileType,
}: ResumeAvailableProps) {
  const fileLabel = resumeFileType ?? 'file';
  const downloadName = `${name.replace(/\s+/g, '-').toLowerCase()}-resume${
    resumeFileType ? `.${resumeFileType.toLowerCase()}` : ''
  }`;

  return (
    <div className="rounded-[2rem] border border-border bg-surface px-6 py-10 sm:px-10 sm:py-12">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surfaceElevated text-accent">
          <FileText aria-hidden="true" size={20} />
        </div>
        <div>
          <p className="font-semibold text-text-primary">{name}&rsquo;s résumé</p>
          {resumeFileType ? (
            <p className="text-sm uppercase tracking-[0.2em] text-text-muted">{fileLabel}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name}'s résumé in a new tab`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentHover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ExternalLink aria-hidden="true" size={16} />
          Open résumé
        </a>
        <a
          href={resumePath}
          download={downloadName}
          aria-label={`Download ${name}'s résumé`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surfaceElevated px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Download aria-hidden="true" size={16} />
          Download
        </a>
      </div>
    </div>
  );
}

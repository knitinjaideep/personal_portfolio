import { Download, FileText, Linkedin } from 'lucide-react';
import Container from '@/components/ui/container';
import Portrait from '@/components/about/portrait';
import { profile } from '@/content/profile';
import { resume } from '@/content/resume';

export default function ResumeWebIntroduction() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Professional résumé
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
              Senior Software Engineer building scalable backend systems, financial capabilities,
              and human-centered software products, with a growing focus on AI systems
              engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.resumePath ? (
                <a
                  href={profile.resumePath}
                  download
                  aria-label={`Download ${profile.name}'s résumé as a PDF`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentHover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Download aria-hidden="true" size={16} />
                  Download PDF
                </a>
              ) : null}
              <a
                href="/resume/print"
                aria-label="View printable résumé"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surfaceElevated px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <FileText aria-hidden="true" size={16} />
                View printable version
              </a>
              <a
                href={resume.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on LinkedIn`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surfaceElevated px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Linkedin aria-hidden="true" size={16} />
                View LinkedIn
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs lg:max-w-none">
            <Portrait
              name={profile.name}
              initials={profile.initials}
              portraitPath={profile.portraitPath}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

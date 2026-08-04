import Container from '@/components/ui/container';
import Portrait from '@/components/about/portrait';
import { profile } from '@/content/profile';

export default function AboutIntroductionSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-16">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {profile.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">{profile.shortBio}</p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-text-muted">
              {profile.positioning}
            </p>

            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                I’m especially interested in
              </p>
              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {profile.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-start gap-2 text-base leading-7 text-text-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-none">
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

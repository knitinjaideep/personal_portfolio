import Container from '@/components/ui/container';
import PrimaryButton from '@/components/ui/primary-button';
import SecondaryButton from '@/components/ui/secondary-button';
import Section from '@/components/ui/section';
import SectionHeader from '@/components/ui/section-header';
import StatusBadge from '@/components/ui/status-badge';

export default function HomePage() {
  return (
    <Container className="py-16 sm:py-24">
      <section className="grid gap-12">
        <div className="max-w-3xl">
          <StatusBadge variant="active">Home Journey flagship</StatusBadge>
          <SectionHeader
            title="Nitin Kotcherlakota"
            eyebrow="Personal portfolio & product studio"
            description="Building thoughtful, human-centered AI products at the intersection of engineering, design, and everyday life."
          />
        </div>

        <div className="grid gap-4 sm:max-w-xl sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <PrimaryButton href="/work">Explore work</PrimaryButton>
          <SecondaryButton href="/about">About the studio</SecondaryButton>
        </div>

        <Section className="bg-surface border border-border rounded-3xl p-8 shadow-glow">
          <p className="max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
            This repository establishes the foundational design system, route structure, and global theme behavior.
            Future updates will add full case studies for Home Journey, Coral, Lab, Notes, About, and Résumé.
          </p>
        </Section>
      </section>
    </Container>
  );
}

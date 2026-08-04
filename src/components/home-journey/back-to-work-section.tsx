import Container from '@/components/ui/container';
import SecondaryButton from '@/components/ui/secondary-button';

export default function HomeJourneyBackToWorkSection() {
  return (
    <section className="border-t border-border bg-background py-14 sm:py-16">
      <Container className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-lg font-medium leading-8 text-text-primary sm:text-xl">
          Home Journey is the only active, complete case study right now &mdash; more product work
          is on the way.
        </p>
        <SecondaryButton href="/work">Back to all work</SecondaryButton>
      </Container>
    </section>
  );
}

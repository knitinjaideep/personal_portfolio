import Container from '@/components/ui/container';
import HouseRecordIllustration from '@/components/home-journey/house-record-illustration';

export default function HomeJourneyProblemSection() {
  return (
    <section id="the-problem" className="scroll-mt-28 bg-background py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">The Problem</p>

        <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center lg:gap-14">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Most home-buying tools disappear after closing.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
              Buying and owning a home produces years of notes, decisions, documents, maintenance
              records, contacts, expenses, warranties, projects, and unfinished tasks. Most software
              focuses on a transaction. Home Journey treats the property as an ongoing personal
              record.
            </p>
          </div>

          <div className="flex justify-center">
            <HouseRecordIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from '@/components/ui/container';
import PrimaryButton from '@/components/ui/primary-button';

export default function ClosingSection() {
  return (
    <section className="border-t border-border bg-background py-14 sm:py-16">
      <Container className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-lg font-medium leading-8 text-text-primary sm:text-xl">
          Have something interesting to talk about?
        </p>
        <PrimaryButton href="/contact">Get in touch</PrimaryButton>
      </Container>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/container';
import TextLink from '@/components/ui/text-link';

export default function ClosingSection() {
  return (
    <section className="border-t border-border bg-background py-14 sm:py-16">
      <Container className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-lg font-medium leading-8 text-text-primary sm:text-xl">
          Building at the intersection of engineering, product design, and meaningful everyday
          problems.
        </p>
        <TextLink href="/about" className="inline-flex shrink-0 items-center gap-1.5 text-base">
          About me <ArrowRight size={16} aria-hidden="true" />
        </TextLink>
      </Container>
    </section>
  );
}

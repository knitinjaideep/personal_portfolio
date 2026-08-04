import Container from '@/components/ui/container';
import SecondaryButton from '@/components/ui/secondary-button';
import TextLink from '@/components/ui/text-link';

interface ComingSoonNavProps {
  message: string;
  backHref: string;
  backLabel: string;
  relatedHref?: string;
  relatedLabel?: string;
}

export default function ComingSoonNav({
  message,
  backHref,
  backLabel,
  relatedHref,
  relatedLabel,
}: ComingSoonNavProps) {
  return (
    <section className="border-t border-border bg-background py-14 sm:py-16">
      <Container className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-lg font-medium leading-8 text-text-primary sm:text-xl">{message}</p>
          {relatedHref && relatedLabel ? (
            <TextLink href={relatedHref}>{relatedLabel}</TextLink>
          ) : null}
        </div>
        <SecondaryButton href={backHref}>{backLabel}</SecondaryButton>
      </Container>
    </section>
  );
}

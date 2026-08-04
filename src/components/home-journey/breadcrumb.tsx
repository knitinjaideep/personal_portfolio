import Link from 'next/link';

export default function HomeJourneyBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center gap-2 text-text-muted">
        <li>
          <Link href="/work" className="transition hover:text-text-primary">
            Work
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-text-primary">
          Home Journey
        </li>
      </ol>
    </nav>
  );
}

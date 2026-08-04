import type { Metadata } from 'next';

const SITE_NAME = 'Nitin Kotcherlakota';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

/**
 * Shared metadata builder so every route ships a consistent title suffix,
 * description, and canonical/OG url without repeating boilerplate per page.
 */
export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url: path,
    },
  };
}

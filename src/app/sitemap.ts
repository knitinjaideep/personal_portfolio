import type { MetadataRoute } from 'next';

const SITE_URL = 'https://nitinkotcherlakota.com';

const ROUTES = [
  '/',
  '/work',
  '/personal',
  '/contact',
  '/resume',
  '/work/home-journey',
  '/work/coral',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'monthly' : 'yearly',
    priority: route === '/' ? 1 : 0.7,
  }));
}

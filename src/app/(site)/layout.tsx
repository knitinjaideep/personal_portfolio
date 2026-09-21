import type { ReactNode } from 'react';
import SkipToContent from '@/components/layout/skip-to-content';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <SkipToContent />
      <SiteHeader />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/theme-toggle';
import DesktopNavigation from '@/components/layout/desktop-navigation';
import MobileNavigation from '@/components/layout/mobile-navigation';

const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/lab', label: 'Lab' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Résumé' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const overHero = pathname === '/' && !isScrolled;
  const navVariant = overHero ? 'onHero' : 'default';

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        overHero
          ? 'border-transparent bg-transparent'
          : 'border-border bg-background/90 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-semibold uppercase tracking-[0.24em] transition-colors ${
              overHero ? 'text-heroText' : 'text-text-primary'
            }`}
          >
            NITIN
          </Link>
          <DesktopNavigation navItems={navItems} variant={navVariant} />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle variant={navVariant} />
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden ${
              overHero
                ? 'border-heroBorder bg-white/10 text-heroText hover:bg-white/15 focus-visible:ring-offset-heroBackground'
                : 'border-border bg-surface text-text-primary hover:bg-surfaceElevated focus-visible:ring-offset-background'
            }`}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <MobileNavigation isOpen={isOpen} navItems={navItems} onClose={() => setIsOpen(false)} />
    </header>
  );
}

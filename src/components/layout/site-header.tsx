'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Header background/border only change on the homepage (it starts
  // transparent over the hero); every other route renders solid regardless
  // of scroll position, so the listener is skipped entirely there.
  useEffect(() => {
    if (pathname !== '/') {
      setIsScrolled(true);
      return;
    }

    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 18);
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    toggleButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeMenu]);

  const overHero = pathname === '/' && !isScrolled;

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
            className="inline-flex items-center py-2 text-sm font-semibold uppercase tracking-[0.24em] text-text-primary"
          >
            NITIN
          </Link>
          <DesktopNavigation navItems={navItems} pathname={pathname} />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            ref={toggleButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition hover:bg-surfaceElevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <MobileNavigation isOpen={isOpen} navItems={navItems} onClose={closeMenu} />
    </header>
  );
}

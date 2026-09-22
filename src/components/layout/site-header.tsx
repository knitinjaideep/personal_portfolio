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
  { href: '/personal', label: 'Personal' },
  { href: '/contact', label: 'Contact' },
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

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-4">
      <div
        className={`site-glass-header relative mx-auto grid h-14 max-w-5xl grid-cols-[1fr_auto_1fr] items-center rounded-full px-4 transition-all duration-300 sm:px-5 ${
          isScrolled || pathname !== '/'
            ? 'shadow-[0_18px_48px_var(--nav-glass-shadow)]'
            : 'shadow-[0_14px_36px_var(--nav-glass-shadow)]'
        }`}
      >
        <div className="flex min-w-0 items-center justify-self-start">
          <Link
            href="/"
            className="inline-flex items-center whitespace-nowrap rounded-full px-1 py-2 text-sm font-extrabold uppercase tracking-[0.2em] text-accent transition duration-200 hover:scale-110 hover:text-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-[0.95rem]"
            aria-label="Nitin home"
          >
            Nitin
          </Link>
        </div>

        <DesktopNavigation navItems={navItems} pathname={pathname} />

        <div className="flex items-center gap-3 justify-self-end">
          <ThemeToggle />
          <button
            ref={toggleButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/45 text-text-primary transition duration-200 hover:scale-110 hover:bg-surfaceElevated hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
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

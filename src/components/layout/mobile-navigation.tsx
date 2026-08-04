'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import ThemeToggle from '@/components/ui/theme-toggle';

type NavItem = {
  href: string;
  label: string;
};

interface MobileNavigationProps {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
}

export default function MobileNavigation({ isOpen, navItems, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden" aria-hidden={!isOpen}>
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-200 motion-reduce:transition-none ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col border-l border-border bg-background px-6 py-5 shadow-2xl transition-transform duration-200 motion-reduce:transition-none sm:w-2/3 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            ref={closeButtonRef}
            type="button"
            tabIndex={isOpen ? 0 : -1}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition hover:bg-surfaceElevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={isOpen ? 0 : -1}
                onClick={onClose}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-2xl px-3 py-3 text-2xl font-semibold tracking-tight transition ${
                  isActive ? 'text-accent' : 'text-text-primary hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="pt-6">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

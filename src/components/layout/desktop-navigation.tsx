'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  href: string;
  label: string;
};

interface DesktopNavigationProps {
  navItems: NavItem[];
}

export default function DesktopNavigation({ navItems }: DesktopNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-6 md:flex">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={`text-sm font-medium transition ${
              isActive ? 'text-accent' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

import Link from 'next/link';

type NavItem = {
  href: string;
  label: string;
};

interface DesktopNavigationProps {
  navItems: NavItem[];
  pathname: string;
}

export default function DesktopNavigation({ navItems, pathname }: DesktopNavigationProps) {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={`inline-flex items-center py-2 text-sm font-medium transition ${
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

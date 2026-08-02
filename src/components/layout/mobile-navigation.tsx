import Link from 'next/link';

type NavItem = {
  href: string;
  label: string;
};

interface MobileNavigationProps {
  isOpen: boolean;
  navItems: NavItem[];
  onNavigate: () => void;
}

export default function MobileNavigation({ isOpen, navItems, onNavigate }: MobileNavigationProps) {
  return (
    <div
      className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t border-border bg-background/95 backdrop-blur-xl`}
      role="dialog"
      aria-modal="true"
    >
      <div className="space-y-4 px-4 py-5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="block rounded-3xl border border-border bg-surface px-4 py-3 text-base font-medium text-text-primary transition hover:bg-surfaceElevated"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

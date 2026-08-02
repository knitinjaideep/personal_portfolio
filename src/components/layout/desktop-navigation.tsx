import Link from 'next/link';

const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/lab', label: 'Lab' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Résumé' },
];

export default function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-text-muted transition hover:text-text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

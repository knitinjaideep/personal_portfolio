'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  variant?: 'default' | 'onHero';
}

const variantStyles = {
  default:
    'border-border bg-surface text-text-primary hover:bg-surfaceElevated focus-visible:ring-offset-background',
  onHero:
    'border-heroBorder bg-white/10 text-heroText hover:bg-white/15 focus-visible:ring-offset-heroBackground',
};

export default function ThemeToggle({ variant = 'default' }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const activeTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = mounted && activeTheme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${variantStyles[variant]}`}
      onClick={() => setTheme(activeTheme === 'dark' ? 'light' : 'dark')}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

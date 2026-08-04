'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';

interface ThemeProviderProps {
  attribute: 'class';
  children: ReactNode;
  defaultTheme?: 'system' | 'light' | 'dark';
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export default function ThemeProvider({
  children,
  attribute,
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = true,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      storageKey="portfolio-theme"
    >
      {children}
    </NextThemesProvider>
  );
}

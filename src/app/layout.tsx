import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/layout/theme-provider';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nitin Kotcherlakota — Product Studio',
  description:
    'Portfolio and product studio for Nitin Kotcherlakota, building thoughtful human-centered AI products.',
  metadataBase: new URL('https://nitinkotcherlakota.com'),
  openGraph: {
    title: 'Nitin Kotcherlakota',
    description:
      'Building thoughtful human-centered AI products at the intersection of engineering, AI, and design.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-text-primary`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

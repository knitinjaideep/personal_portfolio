import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        surfaceElevated: 'var(--surface-elevated)',
        border: 'var(--border)',
        borderStrong: 'var(--border-strong)',
        text: 'var(--text-primary)',
        textMuted: 'var(--text-muted)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent-hover)',
        accentTint: 'var(--accent-tint)',
        purpleGlow: 'var(--purple-glow)',
        statusActive: 'var(--status-active)',
        statusComingSoon: 'var(--status-coming-soon)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(167, 139, 250, 0.12), 0 0 30px rgba(168, 85, 247, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      animation: {
        'float-slow': 'float-layer 5s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;

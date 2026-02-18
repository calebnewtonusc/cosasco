/**
 * Cosasco – Tailwind CSS Configuration
 *
 * NOTE: This project uses Tailwind CSS v4, which has moved most configuration
 * into CSS via @theme (see app/globals.css). This file exists for tooling
 * compatibility (e.g. IDE autocomplete, PostCSS plugins) and for any
 * JavaScript-level overrides that cannot live in CSS.
 *
 * Custom brand colors, fonts, and spacing are defined in globals.css under
 * the @theme inline block and are fully available as Tailwind utilities.
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosasco: {
          dark:         '#0F2A4A',
          blue:         '#1B5EA8',
          'blue-light': '#2472C8',
          'blue-muted': '#4A86C0',
          orange:       '#E8500A',
          'orange-light': '#F26A24',
          gray:         '#F1F5F9',
          'gray-mid':   '#CBD5E1',
          'gray-dark':  '#64748B',
          text:         '#1E293B',
          muted:        '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      screens: {
        'xs': '480px',
        '3xl': '1600px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeInDown: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.3s ease-out',
        'fade-in-up':   'fadeInUp 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      boxShadow: {
        'nav':   '0 4px 24px -4px rgba(15, 42, 74, 0.15)',
        'card':  '0 2px 16px -4px rgba(15, 42, 74, 0.10)',
        'mega':  '0 16px 48px -8px rgba(15, 42, 74, 0.20)',
        'btn':   '0 4px 12px -2px rgba(232, 80, 10, 0.35)',
        'inner-blue': 'inset 0 0 0 2px rgba(27, 94, 168, 0.3)',
      },
      backgroundImage: {
        'cosasco-gradient':        'linear-gradient(135deg, #0F2A4A 0%, #1B5EA8 100%)',
        'cosasco-gradient-subtle': 'linear-gradient(180deg, #F1F5F9 0%, #ffffff 100%)',
        'orange-gradient':         'linear-gradient(135deg, #E8500A 0%, #F26A24 100%)',
        'hero-pattern':            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B5EA8' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config

import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      colors: {
        background: '#131313',
        'on-background': '#ffffff',
        surface: '#1c1c1c',
        'surface-container-lowest': '#1a1a1a',
        'surface-container': '#242424',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#333333',
        'on-surface': '#ffffff',
        'on-surface-variant': '#a3a3a3',
        primary: '#ffffff',
        'on-primary': '#131313',
        secondary: '#10b981',
        'on-secondary': '#ffffff',
        'outline-variant': '#333333',
        'secondary-container': '#04372a',
        'tertiary-container': '#04372a',
        'on-tertiary-container': '#10b981'
      },
      borderRadius: {
        DEFAULT: '2px',
        lg: '4px',
        xl: '8px',
        '2xl': '12px',
        full: '9999px'
      },
      spacing: {
        'container-max': '1200px',
        'margin-desktop': '64px',
        'margin-mobile': '24px',
        gutter: '24px',
        'section-gap': '96px'
      },
      fontFamily: {
        display: ['EB Garamond', ...fontFamily.serif],
        'headline-lg': ['EB Garamond', ...fontFamily.serif],
        'headline-lg-mobile': ['EB Garamond', ...fontFamily.serif],
        'headline-md': ['EB Garamond', ...fontFamily.serif],
        'body-lg': ['Hanken Grotesk', ...fontFamily.sans],
        'body-md': ['Hanken Grotesk', ...fontFamily.sans],
        'label-md': ['Hanken Grotesk', ...fontFamily.sans],
        'label-sm': ['Hanken Grotesk', ...fontFamily.sans]
      },
      fontSize: {
        display: ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'headline-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'headline-lg-mobile': ['32px', { lineHeight: '1.2', fontWeight: '500' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '1.4', fontWeight: '500' }]
      },
      animation: {
        'fade-in': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
};

export default config;

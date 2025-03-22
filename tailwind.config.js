import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      spacing: {
        site: 'var(--site--margin)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'zad-green': 'hsl(var(--zad-green))',
        'zad-green-light': 'hsl(var(--zad-green-light))',
        'zad-beige': 'hsl(var(--zad-beige))',
        'zad-beige-light': 'hsl(var(--zad-beige-light))',
        'zad-gold': 'hsl(var(--zad-gold))',
        'zad-lime': 'hsl(var(--zad-lime))',
        'foreground-primary': 'hsl(var(--foreground) / 1)',
        'foreground-secondary': 'hsl(var(--foreground) / 0.7)',
        'foreground-tertiary': 'hsl(var(--foreground) / 0.5)',
        'foreground-quaternary': 'hsl(var(--foreground) / 0.3)',
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
      },
      fontFamily: {
        sans: ['var(--font-graphik)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              h1: {
                fontSize: 'var(--text-h1)',
                fontWeight: 'bold',
                marginBottom: '0.25em',
                lineHeight: '1.4',
              },
              h2: {
                fontSize: 'var(--text-h2)',
                fontWeight: 'bold',
                marginBottom: '0.25em',
                lineHeight: '1.4',
              },
              h3: {
                fontSize: 'var(--text-h3)',
                fontWeight: 'bold',
                marginBottom: '0.25em',
                lineHeight: '1.3',
              },
              h4: {
                fontSize: 'var(--text-h4)',
                fontWeight: 'bold',
                marginBottom: '0.25em',
                lineHeight: '1.3',
              },
              h5: {
                fontSize: 'var(--text-h5)',
                fontWeight: 'bold',
                marginBottom: '0.25em',
                lineHeight: '1.2',
              },
              h6: {
                fontSize: 'var(--text-h6)',
                fontWeight: 'bold',
                marginBottom: '0.25em',
                lineHeight: '1.2',
              },
            },
          ],
        },
        base: {},
        gray: {
          css: [
            {
              '--tw-prose-body': 'hsl(var(--foreground) / 0.7)',
              '--tw-prose-headings': 'hsl(var(--foreground) / 1)',
            },
          ],
        },
      }),
    },
  },
}

export default config

import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  // darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [typography],

  theme: {
    extend: {
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
        stone: {
          css: [
            {
              '--tw-prose-body': '--alpha(var(--foreground) / 0.7)',
              '--tw-prose-headings': 'var(--foreground)',
            },
          ],
        },
      }),
    },
  },
}

export default config

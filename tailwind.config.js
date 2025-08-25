/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 47.4% 11.2%)',
        primary: {
          DEFAULT: '#036cbc',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#e5f3ff',
          foreground: '#003660',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        ring: '#036cbc',
        input: '#d1d5db',
        accent: '#e5f3ff',
        'muted-foreground': '#6b7280',
      },
    },
  },
  plugins: [],
};


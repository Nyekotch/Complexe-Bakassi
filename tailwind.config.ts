import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleur principale - Noir
        primary: {
          DEFAULT: '#000000',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // Couleur secondaire - Jaune moutarde
        secondary: {
          DEFAULT: '#D4A017',
          50: '#FEF9E7',
          100: '#FDF2C9',
          200: '#FBE98B',
          300: '#F8DD4D',
          400: '#F5D10F',
          500: '#D4A017',
          600: '#B8860B',
          700: '#9C6C00',
          800: '#805200',
          900: '#643800',
          950: '#481E00',
        },
        // Jaune moutarde spécifique
        mustard: {
          DEFAULT: '#D4A017',
          light: '#E6C547',
          dark: '#B8860B',
        },
        // Noir spécifique
        black: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

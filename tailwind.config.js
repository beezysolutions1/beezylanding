/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // emerald
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          mint: '#00df9a',
          neon: '#10f4b1',
          teal: '#14b8a6',
        },
        dark: {
          950: '#030b0d',
          900: '#051417',
          850: '#081d22',
          800: '#0b262d',
          700: '#113a44',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 45px -8px rgba(16, 185, 129, 0.45)',
        'glow-teal': '0 0 45px -8px rgba(20, 184, 166, 0.4)',
        'glow-mint': '0 0 50px -5px rgba(0, 223, 154, 0.5)',
      },
    },
  },
  plugins: [],
}

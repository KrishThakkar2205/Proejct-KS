/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6B1A',
        'deep-black': '#1A1A1A',
        'pure-white': '#FFFFFF',
        'warm-cream': '#FFF8F0',
        'light-gray': '#F5F5F5',
        'medium-gray': '#666666',
        'success-green': '#10B981',
        'alert-blue': '#3B82F6',
        'warning-amber': '#F59E0B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Outfit', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

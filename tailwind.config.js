/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#F7F4FA',
          'bg-dark': '#0E0B15',
          surface: '#FFFFFF',
          'surface-dark': '#15111F',
          'surface-dark-2': '#1B1627',
          'surface-dark-3': '#211B2F',
          border: '#DED5E8',
          'border-dark': '#342A43',
          'border-dark-strong': '#463756',
          text: '#211A2B',
          'text-dark': '#F5F0FA',
          'text-muted': '#6F6678',
          'text-muted-dark': '#C9BED4',
          'text-subtle': '#93889D',
          'text-subtle-dark': '#9E92AA',
          accent: '#7657E8',
          'accent-dark': '#9A7BFF',
          plum: '#A76BCE',
          'plum-dark': '#D178E8',
          lavender: '#C7B6F7',
          'lavender-dark': '#BDA8FF',
          mint: '#7BC7A6',
          'mint-dark': '#7FD1AD',
          amber: '#E6B85C',
          'amber-dark': '#E8BE67',
          rose: '#DD8398',
          'rose-dark': '#E48B9C',
        },
        violet: {
          50: '#F7F4FA',
          100: '#F1ECF6',
          200: '#EEE6FF',
          300: '#C7B6F7',
          400: '#BDA8FF',
          500: '#9A7BFF',
          600: '#7657E8',
          700: '#6746DB',
          800: '#4E2FB3',
          900: '#211A2B',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

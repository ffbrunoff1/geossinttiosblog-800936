/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#A81E34',
        },
        secondary: {
          100: '#f5f5f5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#4D4D4D',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #A81E34 0%, #dc2626 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, #4D4D4D 0%, #737373 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
      },
    },
  },
  plugins: [],
};

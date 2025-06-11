/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./js/**/*.{js,ts}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f87171',
          500: '#dc2626',
          600: '#991b1b',
          700: '#7f1d1d',
          800: '#6f1d1d',
          900: '#5f1d1d',
          950: '#4a1a1a',
        },
        burgundy: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#fad2d2',
          300: '#f5b2b2',
          400: '#ed8585',
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#6f1d1d',
          950: '#450a0a',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'elegant': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elegant-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'burgundy': '0 10px 25px -3px rgba(153, 27, 27, 0.1), 0 4px 6px -2px rgba(153, 27, 27, 0.05)',
      },
      backgroundImage: {
        'gradient-professional': 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
        'gradient-burgundy': 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)',
        'gradient-dark': 'linear-gradient(135deg, #262626 0%, #171717 100%)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
} 
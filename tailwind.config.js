const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'var(--font-sans)', ...fontFamily.sans],
        display: ['Orbitron', 'Inter', ...fontFamily.sans]
      },
      colors: {
        myai: {
          'bg-dark': '#0D0D0F',
          'bg-panel': '#111122',
          'primary': '#7C4DFF',
          'accent': '#00C2FF',
          'accent-warm': '#FFB84D',
          'accent-warm-2': '#FF9900',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(124, 77, 255, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(124, 77, 255, 0.6)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient': 'gradient 22s ease infinite',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

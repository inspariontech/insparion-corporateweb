/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A1124',
          900: '#070B18',
          800: '#0A1124',
          700: '#121A33',
          600: '#1B2542',
        },
        brand: {
          blue: '#38BDF8',
          sky: '#64CEFB',
          cyan: '#22C9E6',
          purple: '#A855F7',
          violet: '#8B5CF6',
          fuchsia: '#C84DF5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'shiny': {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'aurora': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(4%,-6%) scale(1.1)' },
          '66%': { transform: 'translate(-4%,4%) scale(0.95)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
        marquee: 'marquee 32s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

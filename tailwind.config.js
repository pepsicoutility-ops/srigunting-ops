/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Tailwind's default opacity scale only covers multiples of 5, so
      // modifiers like `bg-ink/92` silently produce no CSS. Fill in every
      // integer step — JIT still emits only the ones actually used.
      opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [i, String(i / 100)])),
      colors: {
        // Pulled from the corporate mark: emerald seaweed ring + ink-black drongo
        ink: {
          DEFAULT: '#0B100D',
          800: '#121A15',
          700: '#1B241E',
          600: '#2A362E',
          500: '#465248',
        },
        emerald: {
          50: '#EAFBF1',
          100: '#CDF4DF',
          200: '#9BE8C0',
          300: '#5FD69A',
          400: '#28C176',
          500: '#0FA958',
          600: '#0A8A47',
          700: '#096E3A',
          800: '#0A5730',
          900: '#084526',
        },
        cream: {
          DEFAULT: '#F8F6F1',
          100: '#FBFAF7',
          200: '#F1EDE4',
          300: '#E5DFD1',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E3C459',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      screens: {
        // Ultra-wide desktops: let the layout keep growing instead of
        // stranding the content in a narrow column.
        '3xl': '1800px',
      },
      maxWidth: {
        container: '1600px',
        'container-wide': '1760px',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
      },
    },
  },
  plugins: [],
}

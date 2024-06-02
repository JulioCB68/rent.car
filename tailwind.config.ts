import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'light-gray': '#7A7A80',
        'dark-gray': '#41414D',
        title: '#1B1B1F',
        details: '#AEAEB3',
        red: '#DC1637',
        green: '#03B252',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundColor: {
        'bg-background': '#1B1B1F',
        'background-gray': '#F4F5F6',
        shape: '#29292E',
        red: '#DC1637',
        green: '#03B252',
        'shape-hover': '#050505',
        'red-hover': '#B2122C',
        'green-hover': '#038A3F',
        'red-opacity': '#FDEDEF',
      },
      borderColor: {
        gray: '#AEAEB3',
        red: '#DC1637',
      },
      gridTemplateColumns: {
        tableMd: 'repeat(2, minmax(22.5rem, 1fr))',
        table2Xl: 'repeat(3, minmax(22.5rem, 1fr))',
        table3Xl: 'repeat(4, minmax(22.5rem, 1fr))',
        table4Xl: 'repeat(5, minmax(22.5rem, 1fr))',
      },
      screens: {
        '2xl': '1380px',
        '3xl': '1750px',
        '4xl': '2300px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config

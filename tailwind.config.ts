import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sunflower: {
          50: '#fcfcea',
          100: '#f6f8c9',
          200: '#f3f295',
          300: '#ebe559',
          400: '#e6d83d',
          500: '#d4bd1e',
          600: '#b79617',
          700: '#926e16',
          800: '#79571a',
          900: '#68481b',
          950: '#3c270c',
        },
      },
    },
  },
}

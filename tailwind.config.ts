import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

export default <Partial<Config>>{
  // content: [`components/**/*.vue`, `pages/**/*.vue`, `app.vue`],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        accent: colors.sky,
      },
      fontFamily: {
        sans: ['"Inter"', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      boxShadow: {
        'soft': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

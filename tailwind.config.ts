import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.neutral, // Use neutral for minimalist look
        accent: colors.sky[400], // Subtle accent
        background: colors.zinc[50], // Soft background
        foreground: colors.zinc[900], // Main text
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
        'soft': '0 2px 8px 0 rgba(0,0,0,0.03)', // Softer shadow
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

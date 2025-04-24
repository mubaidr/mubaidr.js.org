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
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

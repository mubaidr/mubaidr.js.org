import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

export default <Partial<Config>>{
  // content: [`components/**/*.vue`, `pages/**/*.vue`, `app.vue`],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

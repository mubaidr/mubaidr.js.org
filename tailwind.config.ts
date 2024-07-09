import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors.js'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.yellow,
        neutral: colors.stone,
      },
    },
  },
}
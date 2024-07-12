import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
  },
}

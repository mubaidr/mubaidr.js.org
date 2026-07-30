export default defineAppConfig({
  ui: {
    icons: {
      system: "i-ph-desktop",
      light: "i-ph-sun",
      dark: "i-ph-moon",
    },
    colors: {
      primary: "red",
      secondary: "blue",
      neutral: "stone",
    },
    badge: {
      defaultVariants: {
        variant: "outline",
      },
    },
    button: {
      defaultVariants: {
        color: "neutral",
        variant: "outline",
      },
    },
  },
})

export default defineAppConfig({
  ui: {
    colors: {
      primary: "stone",
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
    card: {
      slots: {
        root: "bg-default ring ring-default",
      },
    },
  },
})

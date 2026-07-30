export default defineAppConfig({
  ui: {
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
    card: {
      slots: {
        root: "bg-default ring ring-default",
      },
    },
  },
})

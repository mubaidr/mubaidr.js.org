export default defineAppConfig({
  ui: {
    colors: {
      primary: "slate",
      secondary: "blue",
      neutral: "slate",
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
        root: "bg-default ring ring-default rounded-none",
      },
    },
  },
})

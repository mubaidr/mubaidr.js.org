export default defineAppConfig({
  icon: {
    size: "24px",
  },
  ui: {
    colors: {
      primary: "green",
      neutral: "stone",
    },
    badge: {
      defaultVariants: {
        variant: "soft",
      },
    },
    button: {
      slots: {
        base: "rounded-full",
      },
      defaultVariants: {
        variant: "solid",
      },
    },
    card: {
      slots: {
        root: "shadow hover:shadow-lg transition-shadow duration-300 ease-in-out",
      },
      defaultVariants: {
        variant: "soft",
      },
    },
  },
})

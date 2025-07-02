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
        root: "shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out",
      },
      defaultVariants: {
        variant: "outline",
      },
      variants: {
        variant: {
          outline: {
            root: "backdrop-opacity-100",
          },
        },
      },
    },
  },
})

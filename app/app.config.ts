export default defineAppConfig({
  icon: {
    size: "24px",
  },
  ui: {
    colors: {
      primary: "blue",
      neutral: "zinc",
    },
    badge: {
      defaultVariants: {
        variant: "soft",
      },
    },
    button: {
      slots: {
        base: "rounded-full font-semibold",
      },
      defaultVariants: {
        variant: "solid",
      },
    },
    card: {
      slots: {
        root: "shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out dark:bg-neutral-900/50",
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

export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "slate",
    },
    badge: {
      defaultVariants: {
        variant: "soft",
      },
    },
    card: {
      slots: {
        root: "shadow-sm border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-md bg-white dark:bg-neutral-900",
      },
      variants: {
        variant: {
          outline: "border border-neutral-200 dark:border-neutral-800",
        },
      },
    },
  },
})

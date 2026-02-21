export default defineAppConfig({
  ui: {
    colors: {
      primary: "emerald",
      neutral: "stone",
    },
    badge: {
      defaultVariants: {
        variant: "soft",
      },
    },
    button: {
      defaultVariants: {
        color: "primary",
      },
    },
    card: {
      slots: {
        root: "shadow-xs border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-md bg-white dark:bg-neutral-900",
      },
      variants: {
        variant: {
          outline: "border border-neutral-200 dark:border-neutral-800",
        },
      },
    },
    pageCard: {
      slots: {
        wrapper: "flex flex-col flex-1 items-center text-center",
      },
    },
  },
})

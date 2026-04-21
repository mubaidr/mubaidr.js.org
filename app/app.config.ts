export default defineAppConfig({
  ui: {
    colors: {
      primary: "lime",
      secondary: "Amber",
      neutral: "olive",
    },
    badge: {
      defaultVariants: {
        variant: "subtle",
      },
    },
    button: {
      slots: {
        base: "transition-all duration-200 ease-out",
      },
      defaultVariants: {
        color: "primary",
      },
    },
    card: {
      slots: {
        root: "shadow-xs ring ring-default/50 transition-all duration-300 hover:shadow-lg hover:ring-primary/30 hover:-translate-y-0.5 bg-white dark:bg-neutral-900/80 backdrop-blur-sm",
      },
      variants: {
        variant: {
          outline: {
            root: "ring ring-default/50 hover:ring-primary/30 dark:ring-neutral-700/50",
          },
          soft: {
            root: "bg-elevated/40 hover:bg-elevated/60 dark:bg-neutral-900/40 dark:hover:bg-neutral-900/60",
          },
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

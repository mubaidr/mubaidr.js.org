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
        base: "rounded-full font-semibold shadow-glass bg-primary-glass hover:bg-primary/90 text-white dark:text-white transition-all duration-300 backdrop-blur-md border border-white/20 dark:border-white/10",
      },
      defaultVariants: {
        variant: "solid",
        color: "primary",
        size: "xl",
      },
      variants: {
        color: {
          accent: {
            base: "bg-accent-glass hover:bg-accent/90 text-white",
          },
        },
      },
    },
    card: {
      slots: {
        root: "rounded-3xl bg-glass shadow-glass hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-white/10 backdrop-blur-lg dark:bg-neutral-900/60",
      },
      defaultVariants: {
        variant: "outline",
      },
      variants: {
        variant: {
          outline: {
            root: "bg-glass backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-glass hover:shadow-2xl",
          },
        },
      },
    },
  },
})

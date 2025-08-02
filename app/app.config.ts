export default defineAppConfig({
  icon: {
    size: "20px",
  },
  ui: {
    colors: {
      primary: "blue",
      neutral: "stone",
    },
    badge: {
      defaultVariants: {
        variant: "soft",
      },
    },
    card: {
      slots: {
        root: "shadow shadow-black/10 transition-all duration-300 hover:scale-101 hover:shadow-xl backdrop-blur bg-white/30 dark:bg-black/5 bg-gradient-to-br from-white/30 via-white/90 to-white/30 dark:from-black/5 dark:via-black/15 dark:to-black/5",
      },
      variants: {
        variant: {
          outline: "border border-neutral-200 dark:border-neutral-800",
        },
      },
    },
  },
})

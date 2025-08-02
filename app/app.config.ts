export default defineAppConfig({
  icon: {
    size: "20px",
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
    card: {
      slots: {
        root: "shadow shadow-black/10 transition-all duration-300 hover:scale-101 hover:shadow-xl backdrop-blur bg-white/33 dark:bg-black/33",
      },
      variants: {
        variant: {
          outline: "border border-neutral-200 dark:border-neutral-800",
        },
      },
    },
  },
})

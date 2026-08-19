export default defineAppConfig({
  ui: {
    icons: {
      system: "i-ph-desktop",
      light: "i-ph-sun",
      dark: "i-ph-moon",
    },
    colors: {
      primary: "zinc",
      neutral: "zinc",
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
    // PageHeader renders outside the page container, so constrain its content
    // to the same column as the header/hero/sections.
    pageHeader: {
      slots: {
        container: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8",
        headline:
          "mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5 w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8",
      },
    },
  },
})

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
        size: "sm",
      },
    },
    pageHeader: {
      slots: {
        container: "w-full max-w-(--ui-container) mx-auto px-2 sm:px-4",
        headline:
          "mb-2 text-sm font-semibold text-primary flex items-center gap-1.5 w-full max-w-(--ui-container) mx-auto px-2 sm:px-4",
      },
    },
    pageHero: {
      slots: {
        root: "relative isolate flex min-h-[calc(100svh-var(--ui-header-height))] flex-col",
        container: "flex flex-col lg:grid py-12 sm:py-16 lg:py-20 gap-8",
        headline: "mb-2 font-semibold text-primary flex items-center gap-1.5",
        title:
          "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-pretty text-highlighted",
        description: "text-base text-muted",
        body: "mt-6",
      },
    },
    pageSection: {
      slots: {
        container: "py-8 sm:py-12",
      },
    },
    pageFeature: {
      slots: {
        root: "relative",
        leading: "inline-flex items-center justify-center mb-2",
        leadingIcon: "size-4 shrink-0 text-primary",
        title: "text-lg text-pretty font-semibold text-highlighted",
        description: "text-sm text-muted",
      },
    },
    pageGrid: {
      base: "relative grid grid-cols-1 gap-6",
    },
    pageBody: {
      base: "mt-4 pb-16 space-y-8",
    },
    blogPost: {
      slots: {
        title:
          "text-xl font-semibold leading-snug line-clamp-2 text-pretty text-highlighted",
        description: "mt-1 text-base text-pretty text-muted",
      },
    },
    blogPosts: {
      base: "flex flex-col gap-8",
    },
    header: {
      slots: {
        header:
          "px-2 sm:px-4 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3",
      },
    },
    footer: {
      slots: {
        top: "py-6",
        bottom: "py-6",
        container:
          "py-6 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3",
      },
    },
  },
})

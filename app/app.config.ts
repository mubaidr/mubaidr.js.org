export default defineAppConfig({
  ui: {
    icons: {
      system: "i-ph-desktop",
      light: "i-ph-sun",
      dark: "i-ph-moon",
    },
    colors: {
      primary: "black",
    },
    pageSection: {
      slots: {
        container: "py-3! px-0!",
      },
    },
    pageHeader: {
      slots: {
        root: "border-0! my-3!",
      },
    },
    blogPost: {
      slots: {
        title: "font-semibold! text-base!",
      },
    },
  },
})

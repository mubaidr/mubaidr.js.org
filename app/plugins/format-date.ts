import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatDate: (dateStr: string) =>
        dateStr
          ? Intl.DateTimeFormat("us-EN", { dateStyle: "full" }).format(
              new Date(dateStr),
            )
          : undefined,
    },
  }
})

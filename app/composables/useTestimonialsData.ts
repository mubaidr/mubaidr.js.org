export const useTestimonialsData = () => {
  return useAsyncData("testimonials-data", () => {
    return queryCollection("testimonials").order("id", "ASC").all()
  })
}

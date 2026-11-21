export const useFeaturedTestimonials = (count = 3) => {
  return useAsyncData(`featured-testimonials-${count}`, () => {
    return queryCollection("testimonials")
      .where("featured", "=", true)
      .limit(count)
      .all()
  })
}

export const useTestimonials = () => {
  return useAsyncData("testimonials-all", () => {
    return queryCollection("testimonials").all()
  })
}

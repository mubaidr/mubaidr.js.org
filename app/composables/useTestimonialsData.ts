export const useTestimonialsData = () => {
  return useAsyncData("testimonials-data", () => {
    return queryCollection("testimonials").order("id", "ASC").all()
  })
}

export const useFeaturedTestimonials = (count = 3) => {
  return useAsyncData(`featured-testimonials-${count}`, async () => {
    const data = await queryCollection("testimonials").order("id", "ASC").all()
    return data?.filter((t) => t.featured).slice(0, count)
  })
}

export const useTestimonialsByProject = (projectId: number) => {
  return useAsyncData(`testimonials-project-${projectId}`, async () => {
    const data = await queryCollection("testimonials").order("id", "ASC").all()
    return data?.filter((t) => t.projectId === projectId)
  })
}

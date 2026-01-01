export const useProjectsData = () => {
  return useAsyncData("projects-data", () => {
    return queryCollection("projects").first()
  })
}

export const useFeaturedProjects = (count = 2) => {
  return useAsyncData(`featured-projects-${count}`, async () => {
    const data = await queryCollection("projects").first()
    return data?.projects.filter((p) => p.featured).slice(0, count)
  })
}

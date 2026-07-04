export const useProjectsData = () => {
  return useAsyncData("projects-data", async () => {
    const data = await queryCollection("projects").first()
    if (!data) return data
    return {
      ...data,
      projects: [...data.projects].sort(
        (a, b) => (a.rank ?? 999) - (b.rank ?? 999),
      ),
    }
  })
}

export const useFeaturedProjects = (count = 3) => {
  return useAsyncData(`featured-projects-${count}`, async () => {
    const data = await queryCollection("projects").first()
    if (!data) return []
    return [...data.projects]
      .filter((p) => p.featured)
      .sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999))
      .slice(0, count)
  })
}

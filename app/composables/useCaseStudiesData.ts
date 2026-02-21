export const useCaseStudiesData = () => {
  return useAsyncData("case-studies-data", async () => {
    const data = await queryCollection("projects").first()
    // Filter projects that have case_study links or are featured
    return data?.projects?.filter((project) =>
      project.links?.case_study || project.featured
    ) || []
  })
}

export const useFeaturedCaseStudies = (count = 2) => {
  return useAsyncData(`featured-case-studies-${count}`, async () => {
    const data = await queryCollection("projects").first()
    // Filter featured projects that have case_study links
    const caseStudies = data?.projects?.filter((project) =>
      project.featured && project.links?.case_study
    ) || []
    return caseStudies.slice(0, count)
  })
}

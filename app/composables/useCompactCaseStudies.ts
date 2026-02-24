export const useCompactCaseStudies = () => {
  return useAsyncData("compact-case-studies", () => {
    return queryCollection("caseStudies").first()
  })
}

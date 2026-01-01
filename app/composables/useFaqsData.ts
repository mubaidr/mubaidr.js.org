export const useFaqsData = () => {
  return useAsyncData("faqs-data", () => {
    return queryCollection("faqs").first()
  })
}

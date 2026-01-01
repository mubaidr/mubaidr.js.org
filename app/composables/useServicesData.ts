export const useServicesData = () => {
  return useAsyncData("services-data", () => {
    return queryCollection("services").first()
  })
}

export const useServicesPreview = (count = 3) => {
  return useAsyncData(`services-preview-${count}`, async () => {
    const data = await queryCollection("services").first()
    return data?.services.slice(0, count)
  })
}

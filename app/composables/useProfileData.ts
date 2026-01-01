export const useProfileData = () => {
  return useAsyncData("profile-data", () => {
    return queryCollection("profile").first()
  })
}

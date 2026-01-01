export const useProfessionalJourneyData = () => {
  return useAsyncData("professional-journey-data", () => {
    return queryCollection("professionalJourney").first()
  })
}

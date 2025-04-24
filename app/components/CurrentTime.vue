<script setup lang="ts">
// Reactive time and weather variables
let interval: number
const currentTime = ref<string>("")
const weatherData = ref<any>(null)

// Update time every second
async function updateTime() {
  currentTime.value = new Intl.DateTimeFormat("en-PK", {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
    hour12: true,
    timeZone: "Asia/Karachi", // Ensure Rawalpindi's timezone
  }).format(new Date())
}

// Fetch weather data
async function fetchWeatherData() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Rawalpindi,PK&appid=d903c9eb7a15022580eb78e3bfe46cad&units=metric"
    )

    if (!response.ok) {
      console.error("Failed to fetch weather data")
    }

    weatherData.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchWeatherData() // Fetch weather data on mount
  interval = window.setInterval(updateTime, 1000) // Update every second
})

onBeforeUnmount(() => {
  clearInterval(interval) // Cleanup interval on component unmount
})
</script>

<template>
  <div>
    <template v-if="weatherData">
      It's currently
      <strong>{{ currentTime }}</strong>
      ,
      <strong>{{ weatherData.main.feels_like }}°C</strong>
      and
      <strong>{{ weatherData.weather[0]?.description }}</strong>
      here in Rawalpindi, Pakistan
    </template>
    <template v-else>
      Checking conditions...
    </template>
  </div>
</template>

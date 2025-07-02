<script setup lang="ts">
// Define weather data type
interface WeatherData {
  main: {
    feels_like: number
  }
  weather: Array<{
    description: string
  }>
}

// Reactive time and weather variables
let interval: number
const currentTime = ref<string>("")
const weatherData = ref<WeatherData | null>(null)

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
      "https://api.openweathermap.org/data/2.5/weather?q=Rawalpindi,PK&appid=d903c9eb7a15022580eb78e3bfe46cad&units=metric",
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
  <div class="text-center">
    <ClientOnly>
      <div>
        <template v-if="weatherData">
          It's currently {{ currentTime }}, {{ weatherData.main.feels_like }}°C
          and {{ weatherData.weather[0]?.description }} here in Rawalpindi,
          Pakistan
        </template>
      </div>

      <template #fallback>
        <div>Checking conditions...</div>
      </template>
    </ClientOnly>
  </div>
</template>

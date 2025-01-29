<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"

// Reactive time variable
let interval: number
const currentTime = ref<string>("")

const { data: weatherData } = await useFetch<WeatherData>(
  "https://api.openweathermap.org/data/2.5/weather",
  {
    params: {
      q: "Rawalpindi,PK", // City and country code
      appid: "d903c9eb7a15022580eb78e3bfe46cad", // Replace with your OpenWeather API key
      units: "metric", // Use 'imperial' for Fahrenheit
    },
  }
)

// Update time every second
const updateTime = () => {
  currentTime.value = new Intl.DateTimeFormat("en-PK", {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
    hour12: true,
    timeZone: "Asia/Karachi", // Ensure Rawalpindi's timezone
  }).format(new Date())
}

onMounted(() => {
  updateTime() // Initial update
  interval = window.setInterval(updateTime, 1000) // Update every second
})

onBeforeUnmount(() => {
  clearInterval(interval) // Cleanup interval on component unmount
})
</script>

<template>
  <div>
    <template v-if="weatherData">
      It's currently {{ currentTime }}, {{ weatherData.main.feels_like }}°C and
      {{ weatherData.weather[0]?.description }} here in Rawalpindi, Pakistan
    </template>
    <template v-else>
      It's currently {{ currentTime }} here in Rawalpindi, Pakistan
    </template>
  </div>
</template>

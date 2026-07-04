<script setup lang="ts">
const { data: profileData } = await useProfileData()
</script>

<template>
  <section v-if="profileData">
    <div class="max-w-6xl mx-auto space-y-8">
      <!-- Section Header -->
      <div>
        <h2>What I do</h2>
        <p>Where I spend most of my time.</p>
      </div>

      <!-- Target Audiences -->
      <div v-if="profileData.whatIDo?.length" class="space-y-3 font-semibold">
        <p v-for="service in profileData.whatIDo" :key="service">
          {{ service }}
        </p>
      </div>
    </div>
  </section>
</template>

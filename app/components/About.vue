<script setup lang="ts">
const { data: profileData } = await useProfileData()
</script>

<template>
  <section v-if="profileData">
    <div class="max-w-6xl mx-auto space-y-8">
      <!-- Section Header -->
      <div>
        <h2>About</h2>
        <p>Background and focus.</p>
      </div>

      <!-- Target Audiences -->
      <div>
        <p>
          {{ profileData.description }}
        </p>
      </div>
    </div>
  </section>
</template>

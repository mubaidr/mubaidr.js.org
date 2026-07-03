<script setup lang="ts">
const { data: profileData } = await useProfileData()
</script>

<template>
  <section v-if="profileData" class="py-20">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2>Who I Work With</h2>
        <p class="text-lg max-w-2xl mx-auto">
          I partner with organizations and founders who need technical expertise
          to build and scale their products
        </p>
      </div>

      <!-- Target Audiences -->
      <div
        v-if="profileData.whoIWorkWith?.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        <UCard
          v-for="audience in profileData.whoIWorkWith"
          :key="audience.name"
          class="h-full"
        >
          <div class="text-center">
            <h4>
              {{ audience.name }}
            </h4>
            <p>
              {{ audience.description }}
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>

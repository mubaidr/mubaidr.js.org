<script setup lang="ts">
const { data: techStack } = await useAsyncData("tech-stack", () => {
  return queryCollection("techStack").first()
})
</script>

<template>
  <div>
    <div class="space-y-16">
      <!-- Header -->
      <div class="text-center space-y-6">
        <h2>Technical Stack</h2>

        <p class="max-w-4xl mx-auto">
          I leverage a diverse set of technologies to build robust, scalable,
          and high-performance web solutions tailored to client needs.
        </p>
      </div>

      <div
        v-if="techStack && techStack.categories"
        class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-center text-center content-center justify-items-center"
      >
        <UCard
          class="text-center h-full mx-auto w-full max-w-md"
          v-for="category in techStack.categories"
          :key="category.title"
        >
          <div class="space-y-6">
            <div class="space-y-3">
              <h3>{{ category.title }}</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                <UBadge
                  v-for="item in category.items"
                  :key="item"
                  variant="outline"
                  size="lg"
                >
                  {{ item }}
                </UBadge>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

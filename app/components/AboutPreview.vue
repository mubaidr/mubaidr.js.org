<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})
</script>

<template>
  <div>
    <div v-if="profile" class="space-y-16">
      <!-- Header -->
      <div class="text-center space-y-6">
        <h2>Building Digital Solutions That Drive Results</h2>

        <p class="max-w-4xl mx-auto">
          {{ profile.description }}
        </p>
      </div>

      <!-- Value Proposition Cards -->
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Technical Excellence -->
        <UCard class="modern-card glass text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-code" size="3em" class="text-info" />
              </div>
              <div class="space-y-3">
                <h3>Technical Excellence</h3>
                <p>
                  {{ profile?.experience || "12" }}+ years of deep technical
                  expertise across full-stack development, DevOps, and modern
                  architectures.
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Proven Results -->
        <UCard class="modern-card glass text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-chart-line-up" size="3em" class="text-info" />
              </div>
              <div class="space-y-3">
                <h3>Proven Results</h3>
                <p>
                  {{ profile?.projectsDelivered || "125" }}+ successful projects
                  delivered with {{ profile?.clientSatisfaction || "100" }}%
                  client satisfaction rate.
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- True Partnership -->
        <UCard class="modern-card glass text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-chart-line-up" size="3em" class="text-info" />
              </div>
              <div class="space-y-3">
                <h3>Proven Results</h3>
                <p>
                  {{ profile?.projectsDelivered || "125" }}+ successful projects
                  delivered with {{ profile?.clientSatisfaction || "100" }}%
                  client satisfaction rate.
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Call to Action -->
      <div class="text-center space-y-6">
        <div class="max-w-3xl mx-auto">
          <h3 class="mb-4">Ready to Build Something Exceptional?</h3>
          <p class="mb-8">
            From SaaS platforms to browser extensions, I help businesses ship
            scalable solutions that drive growth.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton to="/about" variant="outline" size="xl">
              <UIcon name="i-ph-user" />
              <span>Learn More About Me</span>
            </UButton>
            <UButton to="/contact" variant="solid" size="xl">
              <UIcon name="i-ph-rocket-launch" />
              <span>Start Your Project</span>
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

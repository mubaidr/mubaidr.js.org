<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})
</script>

<template>
  <div>
    <div class="space-y-16" v-if="profile">
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
        <UCard variant="subtle" class="text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-code" class="w-8 h-8" />
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
        <UCard variant="subtle" class="text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-chart-line-up" class="w-8 h-8" />
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
        <UCard variant="subtle" class="text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-handshake" class="w-8 h-8" />
              </div>
              <div class="space-y-3">
                <h3>True Partnership</h3>
                <p>
                  {{ profile?.availability?.responseTime || "8h" }}
                  response time guarantee with transparent communication and
                  agile collaboration.
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
            <UButton to="/about" variant="outline" size="lg">
              <UIcon name="i-ph-user" class="mr-2" />
              <span>Learn More About Me</span>
            </UButton>
            <UButton to="/contact" variant="solid" size="lg">
              <UIcon name="i-ph-rocket-launch" class="mr-2" />
              <span>Start Your Project</span>
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

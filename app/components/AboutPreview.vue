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
        <UCard class="text-center h-full">
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
        <UCard class="text-center h-full">
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
        <UCard class="text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-handshake" size="3em" class="text-info" />
              </div>
              <div class="space-y-3">
                <h3>True Partnership</h3>
                <p>
                  I work closely with clients to understand their unique needs,
                  ensuring solutions that truly fit their business.
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

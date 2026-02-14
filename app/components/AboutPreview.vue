<script lang="ts" setup>
// Fetch profile data using composable
const { data: profileData } = await useProfileData()
</script>

<template>
  <div>
    <div v-if="profileData" class="space-y-16">
      <!-- Header -->
      <div class="text-center space-y-6">
        <h2>Building Digital Solutions That Drive Results</h2>

        <p class="max-w-4xl mx-auto">
          {{ profileData.description }}
        </p>
      </div>

      <!-- Value Proposition Cards -->
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Technical Excellence -->
        <UCard class="text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon
                  name="i-ph-code-bold"
                  size="3em"
                  class="text-primary-500"
                />
              </div>
              <div class="space-y-3">
                <h3 class="font-bold">Technical Excellence</h3>
                <p class="text-neutral-600 dark:text-neutral-400">
                  {{ profileData.experience }}+ years of deep technical
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
                <UIcon
                  name="i-ph-chart-line-up-bold"
                  size="3em"
                  class="text-primary-500"
                />
              </div>
              <div class="space-y-3">
                <h3 class="font-bold">Proven Results</h3>
                <p class="text-neutral-600 dark:text-neutral-400">
                  {{ profileData.projectsDelivered }}+ successful projects
                  delivered with {{ profileData.clientSatisfaction }}% client
                  satisfaction rate.
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
                <UIcon
                  name="i-ph-handshake-bold"
                  size="3em"
                  class="text-primary-500"
                />
              </div>
              <div class="space-y-3">
                <h3 class="font-bold">True Partnership</h3>
                <p class="text-neutral-600 dark:text-neutral-400">
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

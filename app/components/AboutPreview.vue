<script lang="ts" setup>
const { data: profileData } = await useProfileData()
</script>

<template>
  <section v-if="profileData" class="py-16 md:py-24">
    <div>
      <!-- Header -->
      <div class="text-center max-w-4xl mx-auto mb-16 md:mb-20">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Building Digital Solutions That Drive Results
        </h2>
        <p
          class="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
        >
          {{ profileData.description }}
        </p>
      </div>

      <!-- Value Proposition Cards -->
      <div class="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Technical Excellence -->
        <UPageCard
          title="Technical Excellence"
          description="Deep technical expertise across full-stack development, DevOps, and modern architectures."
          icon="i-ph-code-bold"
          :spotlight="true"
          :ui="{
            root: 'text-center',
          }"
        >
          <template #footer>
            <div>
              <div class="text-xl font-bold mb-1">
                {{ profileData.experience }}+
              </div>
              <div
                class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold"
              >
                Years Experience
              </div>
            </div>
          </template>
        </UPageCard>

        <!-- Proven Results -->
        <UPageCard
          title="Proven Results"
          description="Successful projects delivered with exceptional outcomes and measurable impact."
          icon="i-ph-chart-line-up-bold"
          :spotlight="true"
        >
          <template #footer>
            <div>
              <div class="text-xl font-bold mb-1">
                {{ profileData.projectsDelivered }}+
              </div>
              <div
                class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold"
              >
                Projects Delivered
              </div>
            </div>
          </template>
        </UPageCard>

        <!-- True Partnership -->
        <UPageCard
          title="True Partnership"
          description="I work closely with clients to understand unique needs, ensuring solutions that truly fit their business."
          icon="i-ph-handshake-bold"
          :spotlight="true"
          class="text-center"
        >
          <template #footer>
            <div>
              <div class="text-xl font-bold mb-1">
                {{ profileData.clientSatisfaction }}%
              </div>
              <div
                class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold"
              >
                Client Satisfaction
              </div>
            </div>
          </template>
        </UPageCard>
      </div>
    </div>
  </section>
</template>

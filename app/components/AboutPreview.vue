<script lang="ts" setup>
const { data: profileData } = await useProfileData()
</script>

<template>
  <section v-if="profileData" class="py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        <UCard
          class="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="flex flex-col h-full text-center">
            <div
              class="w-16 h-16 flex items-center justify-center mx-auto mb-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20"
            >
              <UIcon
                name="i-ph-code-bold"
                size="2.5rem"
                class="text-primary-600 dark:text-primary-400"
              />
            </div>
            <h3>Technical Excellence</h3>
            <p
              class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6"
            >
              Deep technical expertise across full-stack development, DevOps,
              and modern architectures.
            </p>
            <div
              class="mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-700"
            >
              <div
                class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-1"
              >
                {{ profileData.experience }}+
              </div>
              <div
                class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold"
              >
                Years Experience
              </div>
            </div>
          </div>
        </UCard>

        <!-- Proven Results -->
        <UCard
          class="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="flex flex-col h-full text-center">
            <div
              class="w-16 h-16 flex items-center justify-center mx-auto mb-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20"
            >
              <UIcon
                name="i-ph-chart-line-up-bold"
                size="2.5rem"
                class="text-primary-600 dark:text-primary-400"
              />
            </div>
            <h3>Proven Results</h3>
            <p
              class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6"
            >
              Successful projects delivered with exceptional outcomes and
              measurable impact.
            </p>
            <div
              class="mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-700"
            >
              <div
                class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-1"
              >
                {{ profileData.projectsDelivered }}+
              </div>
              <div
                class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold"
              >
                Projects Delivered
              </div>
            </div>
          </div>
        </UCard>

        <!-- True Partnership -->
        <UCard
          class="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="flex flex-col h-full text-center">
            <div
              class="w-16 h-16 flex items-center justify-center mx-auto mb-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20"
            >
              <UIcon
                name="i-ph-handshake-bold"
                size="2.5rem"
                class="text-primary-600 dark:text-primary-400"
              />
            </div>
            <h3>True Partnership</h3>
            <p
              class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6"
            >
              I work closely with clients to understand unique needs, ensuring
              solutions that truly fit their business.
            </p>
            <div
              class="mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-700"
            >
              <div
                class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-1"
              >
                {{ profileData.clientSatisfaction }}%
              </div>
              <div
                class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold"
              >
                Client Satisfaction
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>

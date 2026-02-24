<script setup lang="ts">
const { data: profileData, pending: isLoading } = await useProfileData()

interface PricingRange {
  min: number
  max: number
  currency: string
  description: string
}

interface WhoIWorkWithItem {
  name: string
  icon: string
  description: string
}

interface _ProfileData {
  whoIWorkWith?: WhoIWorkWithItem[]
  pricingRanges?: {
    mvp: PricingRange
    architectureAudit: PricingRange
    hourly: PricingRange
  }
}

const formatPrice = (min: number, max: number, currency: string): string => {
  if (min === max) {
    return `${currency}$${min.toLocaleString()}`
  }
  return `${currency}$${min.toLocaleString()}–${max.toLocaleString()}`
}
</script>

<template>
  <section v-if="profileData" class="py-20">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Who I Work With
        </h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          I partner with organizations and founders who need technical expertise to build and scale their products
        </p>
      </div>

      <!-- Target Audiences -->
      <!-- Loading Skeleton -->
      <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <USkeleton v-for="i in 3" :key="i" class="h-32 w-full" />
      </div>

      <div v-else-if="profileData.whoIWorkWith?.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <UCard
v-for="audience in profileData.whoIWorkWith" :key="audience.name"
          class="hover:shadow-lg transition-shadow"
        >
          <div class="flex items-start gap-4">
            <div class="shrink-0">
              <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <UIcon :name="audience.icon" class="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-neutral-900 dark:text-white mb-1">
                {{ audience.name }}
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-400">
                {{ audience.description }}
              </p>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Pricing Cards -->
      <!-- Loading Skeleton -->
      <div v-if="isLoading" class="space-y-8">
        <USkeleton class="h-8 w-48 mx-auto" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <USkeleton v-for="i in 3" :key="i" class="h-80 w-full" />
        </div>
      </div>

      <div v-else-if="profileData.pricingRanges" class="space-y-8">
        <h3 class="text-2xl font-bold text-center text-neutral-900 dark:text-white">
          Pricing
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- MVP Pricing -->
          <UCard class="border-2 border-primary-200 dark:border-primary-800">
            <template #header>
              <div class="text-center">
                <h4 class="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  MVP Development
                </h4>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {{ formatPrice(profileData.pricingRanges.mvp.min, profileData.pricingRanges.mvp.max, profileData.pricingRanges.mvp.currency) }}
                </div>
                <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                  {{ profileData.pricingRanges.mvp.description }}
                </p>
              </div>
            </template>
            <div class="space-y-3">
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Full-stack development</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Database design & integration</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>API development & testing</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Deployment & documentation</span>
              </div>
            </div>
          </UCard>

          <!-- Architecture Audit -->
          <UCard>
            <template #header>
              <div class="text-center">
                <h4 class="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Architecture Audit
                </h4>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {{ formatPrice(profileData.pricingRanges.architectureAudit.min, profileData.pricingRanges.architectureAudit.max, profileData.pricingRanges.architectureAudit.currency) }}
                </div>
                <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                  {{ profileData.pricingRanges.architectureAudit.description }}
                </p>
              </div>
            </template>
            <div class="space-y-3">
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Code review & analysis</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Performance evaluation</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Security assessment</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Detailed recommendations</span>
              </div>
            </div>
          </UCard>

          <!-- Hourly -->
          <UCard>
            <template #header>
              <div class="text-center">
                <h4 class="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Hourly Consulting
                </h4>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {{ formatPrice(profileData.pricingRanges.hourly.min, profileData.pricingRanges.hourly.max, profileData.pricingRanges.hourly.currency) }}
                </div>
                <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                  {{ profileData.pricingRanges.hourly.description }}
                </p>
              </div>
            </template>
            <div class="space-y-3">
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Technical guidance</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Code reviews & mentoring</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Architecture planning</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <UIcon name="i-ph-check-circle" class="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>Flexible engagement</span>
              </div>
            </div>
          </UCard>
        </div>

        <!-- CTA -->
        <div class="text-center mt-8">
          <p class="text-neutral-600 dark:text-neutral-400 mb-4">
            Pricing varies based on project scope and requirements. Let's discuss your needs.
          </p>
          <UButton to="/contact" size="lg" icon="i-ph-envelope">
            Get a Custom Quote
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { count } = defineProps({
  count: {
    type: Number,
    default: 3,
  },
})

const { data: testimonials } = await useFeaturedTestimonials(count)
</script>

<template>
  <UPageSection
    v-if="testimonials && testimonials.length > 0"
    title="Client Outcomes"
    description="Results from real engagements"
    icon="ph:chat-circle-text"
  >
    <div class="grid gap-4 md:grid-cols-3">
      <UPageCard
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="h-full"
      >
        <div class="space-y-4">
          <p class="text-sm leading-relaxed">"{{ testimonial.quote }}"</p>
          <div class="border-t border-muted pt-4">
            <p class="font-mono text-sm font-medium">{{ testimonial.name }}</p>
            <p class="text-sm text-muted">
              {{ testimonial.title }}<span v-if="testimonial.company">, {{ testimonial.company }}</span>
            </p>
            <p class="text-xs text-muted mt-0.5">{{ testimonial.project }}</p>
          </div>
          <div v-if="testimonial.results.length" class="flex flex-wrap gap-1.5">
            <UBadge
              v-for="(result, i) in testimonial.results"
              :key="i"
              color="neutral"
              size="sm"
              variant="subtle"
            >
              {{ result }}
            </UBadge>
          </div>
        </div>
      </UPageCard>
    </div>
  </UPageSection>
</template>

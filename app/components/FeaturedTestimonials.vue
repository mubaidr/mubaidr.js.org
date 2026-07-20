<script lang="ts" setup>
const testimonials = [
  {
    id: "1",
    name: "Guilherme R.",
    title: "Startup Founder",
    company: "Tech Startup",
    quote:
      "Muhammad delivered our MVP 2 weeks ahead of schedule and 20% under budget. His expertise in Vue.js helped us achieve 40% faster load times than our previous solution. Highly recommended!",
    project: "SaaS Platform MVP",
    results: [
      "Delivered 2 weeks early",
      "20% under budget",
      "40% performance improvement",
    ],
  },
  {
    id: "2",
    name: "Mark B.",
    title: "Product Manager",
    company: "E-commerce Agency",
    quote:
      "Perfect 5/5 across all metrics! Muhammad transformed our legacy system into a modern, scalable solution. Revenue increased by 35% within 3 months of launch. Outstanding work!",
    project: "E-commerce Platform Modernization",
    results: [
      "50% faster page loads",
      "Zero downtime migration",
      "100% client satisfaction",
    ],
  },
  {
    id: "3",
    name: "Chris M.",
    title: "CTO",
    company: "FinTech Startup",
    quote:
      "Muhammad exceeded expectations! Delivered a complex financial dashboard on time and budget. The solution handles 10,000+ concurrent users with 99.9% uptime. Already planning our next project together!",
    project: "Real-time Financial Dashboard",
    results: [
      "99.9% uptime achieved",
      "On time & budget delivery",
      "30% faster than competitors",
    ],
  },
]
</script>

<template>
  <UPageSection
    title="What Clients Say"
    description="Real feedback from founders and teams I've worked with"
    icon="ph:chat-circle-text"
  >
    <div class="grid gap-8 md:grid-cols-3">
      <UPageCard
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="h-full"
        spotlight
      >
        <div class="space-y-4">
          <p class="leading-relaxed">"{{ testimonial.quote }}"</p>
          <div class="border-t border-muted pt-4">
            <p class="font-semibold">{{ testimonial.name }}</p>
            <p class="text-sm text-muted">
              {{ testimonial.title }}, {{ testimonial.company }}
            </p>
          </div>
          <div v-if="testimonial.results.length" class="flex flex-wrap gap-2">
            <UBadge
              v-for="(result, i) in testimonial.results.slice(0, 2)"
              :key="i"
              color="primary"
              variant="subtle"
              size="sm"
            >
              {{ result }}
            </UBadge>
          </div>
        </div>
      </UPageCard>
    </div>
  </UPageSection>
</template>

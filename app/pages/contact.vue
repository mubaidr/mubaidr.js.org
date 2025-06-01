<script setup lang="ts">
definePageMeta({
  title: "Contact - Muhammad Ubaid Raza",
  description:
    "Get in touch to discuss your project requirements and start working together.",
})

useHead({
  title: "Contact - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Get in touch to discuss your project requirements and start working together.",
    },
  ],
})

// Contact methods
const contactMethods = ref([
  {
    icon: "i-ph-envelope",
    title: "Email",
    description: "Send me an email anytime",
    value: "mubaidr@gmail.com",
    action: "mailto:hello@mubaidr.com",
  },
  {
    icon: "i-ph-linkedin-logo",
    title: "LinkedIn",
    description: "Connect with me professionally",
    value: "/in/mubaidr",
    action: "https://linkedin.com/in/mubaidr",
  },
  {
    icon: "i-ph-github-logo",
    title: "GitHub",
    description: "Check out my code",
    value: "@mubaidr",
    action: "https://github.com/mubaidr",
  },
  {
    icon: "i-ph-calendar",
    title: "Schedule a Call",
    description: "Book a 30-min consultation",
    value: "cal.com/mubaidr",
    action: "https://cal.com/mubaidr",
  },
])

// Fetch FAQs from Nuxt Content using queryCollection
const { data: faqsData } = await useAsyncData("faqs", () => {
  return queryCollection("faqs").first()
})

// If the page was accessed via a link with `?faqs=true`, scroll to FAQs section
onMounted(() => {
  const {
    query: { faqs: isFaqLink = false },
  } = useRoute()

  if (isFaqLink) {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }
})
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Page Header -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Have a project in mind? I'd love to hear about it and discuss how we
          can bring your ideas to life.
        </p>
      </div>

      <!-- Contact Methods -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the method that works best for you
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <UCard
            v-for="method in contactMethods"
            :key="method.title"
            class="text-center cursor-pointer transition-all duration-300 hover:scale-105"
            variant="soft"
            @click="navigateTo(method.action, { external: true })"
          >
            <div class="space-y-4 p-4">
              <div
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto"
              >
                <UIcon :name="method.icon" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">
                  {{ method.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {{ method.description }}
                </p>
                <p class="text-primary font-medium text-sm">
                  {{ method.value }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- FAQ -->
      <section
        class="space-y-8"
        id="faqs"
        v-if="faqsData && faqsData.list.length > 0"
      >
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Common questions about working together
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <UAccordion :items="faqsData.list" />
        </div>
      </section>
    </div>
  </div>
</template>

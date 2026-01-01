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
    icon: "i-ph-calendar",
    title: "Schedule a Call",
    description: "Book a 30-min consultation",
    value: "cal.com/mubaidr",
    action: "https://cal.com/mubaidr",
  },
])

// Fetch FAQs using composable
const { data: faqsData } = await useFaqsData()

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
    <div class="space-y-32">
      <!-- Page Header -->
      <div class="text-center space-y-6">
        <h1>Let's Work Together</h1>

        <p class="max-w-4xl mx-auto">
          Have a project in mind? I'd love to hear about it and discuss how we
          can bring your ideas to life.
        </p>
      </div>

      <!-- Contact Methods -->
      <section class="space-y-12">
        <div class="text-center space-y-6">
          <h2>Choose Your Preferred Method</h2>
          <p class="max-w-3xl mx-auto">
            Select the most convenient way to reach out, and I'll get back to
            you as soon as possible.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <UCard
            v-for="method in contactMethods"
            :key="method.title"
            class="text-center h-full"
          >
            <div class="p-6 space-y-6">
              <div class="flex items-center justify-center mx-auto">
                <UIcon
                  :name="method.icon"
                  size="3em"
                  class="text-primary-500"
                />
              </div>
              <div class="space-y-4">
                <div class="space-y-1">
                  <h3 class="text-xl font-bold">
                    {{ method.title }}
                  </h3>
                  <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                    {{ method.description }}
                  </p>
                </div>

                <UButton
                  variant="outline"
                  color="neutral"
                  class="w-full justify-center"
                  @click="navigateTo(method.action, { external: true })"
                >
                  {{ method.value }}
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- FAQ -->
      <section
        v-if="faqsData && faqsData.list.length > 0"
        id="faqs"
        class="space-y-12"
      >
        <div class="text-center space-y-6">
          <h2>Frequently Asked Questions</h2>
          <p class="max-w-3xl mx-auto">
            Find answers to common inquiries about my services and processes.
          </p>
        </div>

        <div>
          <UAccordion :items="faqsData.list" variant="soft" size="lg" />
        </div>
      </section>
    </div>
  </div>
</template>

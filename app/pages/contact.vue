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
    icon: "i-ph-calendar-blank",
    title: "No Discovery Call Required",
    description:
      "Skip the call — share details via email and I'll respond with a plan",
    value: "Start async",
    action:
      "mailto:mubaidr@gmail.com?subject=Project%20Inquiry&body=Hi%20Muhammad%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20without%20a%20discovery%20call.%20Here%20are%20the%20details%3A%0A%0A%5BDescribe%20your%20project%2C%20goals%2C%20timeline%2C%20and%20any%20requirements%5D",
    ariaLabel: "Start async project discussion via email",
    highlight: true,
  },
  {
    icon: "i-ph-envelope",
    title: "Email",
    description: "Send me an email anytime",
    value: "mubaidr@gmail.com",
    action: "mailto:mubaidr@gmail.com",
    ariaLabel: "Send email to mubaidr@gmail.com",
  },
  {
    icon: "i-ph-linkedin-logo",
    title: "LinkedIn",
    description: "Connect with me professionally",
    value: "/in/mubaidr",
    action: "https://linkedin.com/in/mubaidr",
    ariaLabel: "Connect with Muhammad Ubaid Raza on LinkedIn",
  },
  // {
  //   icon: "i-ph-calendar",
  //   title: "Schedule a Call",
  //   description: "Book a 30-min consultation",
  //   value: "cal.com/mubaidr",
  //   action: "https://cal.com/mubaidr",
  //   ariaLabel: "Schedule a 30-minute consultation call",
  // },
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

        <!-- Async-first consulting badge -->
        <div class="flex items-center justify-center gap-3 mt-4">
          <UIcon name="i-ph-lightning" size="1.25em" class="text-primary-500" />
          <span
            class="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-semibold text-base border border-primary-200 dark:border-primary-800"
          >
            Async-first consulting
          </span>
        </div>
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

        <!-- Highlighted method: full width -->
        <UPageCard
          v-for="method in contactMethods.filter((m) => m.highlight)"
          :key="method.title"
          spotlight
          highlight
          class="w-full"
        >
          <div class="p-6 md:p-8 space-y-6">
            <div class="flex items-center justify-center mx-auto">
              <UIcon :name="method.icon" size="3em" class="text-primary-500" />
            </div>
            <div class="space-y-4 text-center">
              <div class="space-y-1">
                <h3 class="text-2xl md:text-3xl font-bold">
                  {{ method.title }}
                </h3>
                <p
                  class="text-neutral-600 dark:text-neutral-400 text-base md:text-lg"
                >
                  {{ method.description }}
                </p>
              </div>

              <UButton
                variant="solid"
                color="primary"
                size="lg"
                class="w-full md:w-auto justify-center"
                :aria-label="method.ariaLabel"
                @click="navigateTo(method.action, { external: true })"
              >
                {{ method.value }}
              </UButton>
            </div>
          </div>
        </UPageCard>

        <!-- Other methods: 2-column grid -->
        <div class="grid gap-8 md:grid-cols-2">
          <UPageCard
            v-for="method in contactMethods.filter((m) => !m.highlight)"
            :key="method.title"
            spotlight
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
                  :aria-label="method.ariaLabel"
                  @click="navigateTo(method.action, { external: true })"
                >
                  {{ method.value }}
                </UButton>
              </div>
            </div>
          </UPageCard>
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

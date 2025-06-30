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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-32 py-16">
        <!-- Page Header -->
        <div class="text-center space-y-6">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
          >
            <UIcon name="i-ph-paper-plane-tilt" class="w-4 h-4 text-primary" />
            <span class="text-sm font-medium text-primary">Contact Me</span>
          </div>

          <h1
            class="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
          >
            Let's Work Together
          </h1>

          <p
            class="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
        </div>

        <!-- Contact Methods -->
        <section class="space-y-12">
          <div class="text-center space-y-6">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <UIcon name="i-ph-chats-circle" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2
              class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
            >
              Choose Your Preferred Method
            </h2>
            <p
              class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Select the most convenient way to reach out, and I'll get back to
              you as soon as possible.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            <div
              v-for="method in contactMethods"
              :key="method.title"
              class="group relative"
              @click="navigateTo(method.action, { external: true })"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
              ></div>
              <UCard
                variant="soft"
                class="relative h-full text-center cursor-pointer border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-500 transform group-hover:-translate-y-1"
              >
                <div class="space-y-4 p-4">
                  <div
                    class="w-16 h-16 bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                  >
                    <UIcon :name="method.icon" class="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold mb-1">
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
          </div>
        </section>

        <!-- FAQ -->
        <section
          class="space-y-12"
          id="faqs"
          v-if="faqsData && faqsData.list.length > 0"
        >
          <div class="text-center space-y-6">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <UIcon name="i-ph-question" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium text-primary"
                >Have Questions?</span
              >
            </div>
            <h2
              class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </h2>
            <p
              class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Find answers to common inquiries about my services and processes.
            </p>
          </div>

          <div class="max-w-4xl mx-auto">
            <UAccordion :items="faqsData.list" variant="soft" size="lg" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

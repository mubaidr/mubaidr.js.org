<script setup lang="ts">
const { data: faqsData } = await useFaqsData()

const contactMethods = ref([
  {
    icon: "i-ph-envelope",
    title: "Email",
    description: "Best for detailed project briefs and async collaboration",
    value: "mubaidr@gmail.com",
    action: "mailto:mubaidr@gmail.com",
    ariaLabel: "Send email to mubaidr@gmail.com",
    highlight: false,
  },
  {
    icon: "i-ph-linkedin-logo",
    title: "LinkedIn",
    description: "Connect professionally or drop a message there",
    value: "/in/mubaidr",
    action: "https://linkedin.com/in/mubaidr",
    ariaLabel: "Connect with Muhammad Ubaid Raza on LinkedIn",
  },
])

definePageMeta({
  title: "Contact",
  description:
    "Get in touch to discuss your project. I'm available for full-stack development, AI agent systems, and technical consulting engagements.",
})

useSeoMeta({
  title: "Contact",
  description:
    "Get in touch to discuss your project. I'm available for full-stack development, AI agent systems, and technical consulting engagements.",
  ogTitle: "Contact Muhammad Ubaid Raza - Senior Software Engineer",
  ogDescription:
    "Get in touch to discuss your project. Available for full-stack development, AI systems, and technical consulting.",
  twitterTitle: "Contact Muhammad Ubaid Raza - Senior Software Engineer",
  twitterDescription:
    "Get in touch to discuss your project. Available for full-stack development, AI systems, and technical consulting.",
})

useSchemaOrg({
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Person",
    name: "Muhammad Ubaid Raza",
    email: "mubaidr@gmail.com",
  },
})

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
  <UPage>
    <UPageHeader
      title="Let's work together"
      description="Have a project in mind? Share the details - I'll respond with a clear plan and honest assessment."
    />

    <UPageBody>
      <UContainer class="space-y-12">
        <div class="grid gap-6 md:grid-cols-2">
          <UPageCard v-for="method in contactMethods" :key="method.title">
            <div class="p-6 space-y-4">
              <div class="flex items-center gap-3">
                <UIcon
                  :name="method.icon"
                  size="1.5em"
                  class="text-primary-500"
                />
                <h3 class="text-lg font-semibold">{{ method.title }}</h3>
              </div>
              <p class="text-sm text-muted">{{ method.description }}</p>
              <UButton
                color="neutral"
                class="w-full justify-center"
                :aria-label="method.ariaLabel"
                :to="method.action"
                external
              >
                {{ method.value }}
              </UButton>
            </div>
          </UPageCard>
        </div>

        <USeparator />

        <section
          v-if="faqsData && faqsData.list.length > 0"
          id="faqs"
          class="space-y-8"
        >
          <div>
            <h2 class="text-2xl font-semibold">Common Questions</h2>
            <p class="mt-1 text-muted">
              Answers to what most clients ask before we start.
            </p>
          </div>

          <UAccordion :items="faqsData.list" size="lg" />
        </section>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
// const { data: faqsData } = await useFaqsData()

// if (!faqsData.value) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: "FAQs not found",
//   })
// }

const contactMethods = ref([
  {
    icon: "i-ph-envelope",
    title: "Email",
    description: "Send me an email anytime",
    value: "mubaidr@gmail.com",
    action: "mailto:mubaidr@gmail.com",
    ariaLabel: "Send email to mubaidr@gmail.com",
    highlight: false,
  },
  {
    icon: "i-ph-linkedin-logo",
    title: "LinkedIn",
    description: "Connect with me professionally",
    value: "/in/mubaidr",
    action: "https://linkedin.com/in/mubaidr",
    ariaLabel: "Connect with Muhammad Ubaid Raza on LinkedIn",
  },
])

definePageMeta({
  title: "Contact",
  description:
    "Get in touch to discuss your project requirements and start working together.",
})

useSeoMeta({
  title: "Contact",
  description:
    "Get in touch to discuss your project requirements and start working together.",
  ogTitle: "Contact Muhammad Ubaid Raza - Senior Software Engineer",
  ogDescription:
    "Get in touch to discuss your project requirements and start working together.",
  twitterTitle: "Contact Muhammad Ubaid Raza - Senior Software Engineer",
  twitterDescription:
    "Get in touch to discuss your project requirements and start working together.",
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
      description="Have a project in mind? Share the details and I'll respond with a plan."
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

        <!-- <USeparator />

        <section
          v-if="faqsData && faqsData.list.length > 0"
          id="faqs"
          class="space-y-8"
        >
          <div>
            <h2>Common Questions</h2>
          </div>

          <UAccordion :items="faqsData.list" size="lg" />
        </section> -->
      </UContainer>
    </UPageBody>
  </UPage>
</template>

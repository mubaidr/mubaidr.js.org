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

// Contact form state
const form = ref({
  name: "",
  email: "",
  company: "",
  project: "",
  budget: "",
  timeline: "",
  message: "",
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref("")

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  submitError.value = ""

  try {
    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form and show success
    form.value = {
      name: "",
      email: "",
      company: "",
      project: "",
      budget: "",
      timeline: "",
      message: "",
    }
    submitSuccess.value = true

    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    submitError.value = "Something went wrong. Please try again."
  } finally {
    isSubmitting.value = false
  }
}

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

// Project types
const projectTypes = [
  "Web Application",
  "E-commerce Platform",
  "SaaS Product",
  "Browser Extension",
  "API Development",
  "Technical Consulting",
  "Code Review",
  "Other",
]

// Budget ranges
const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "Over $100,000",
  "Hourly Rate",
  "To be discussed",
]

// Timeline options
const timelineOptions = [
  "ASAP",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Flexible",
]
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Page Header -->
      <div class="text-center">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Let's Work Together
        </h1>
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
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto"
              >
                <UIcon
                  :name="method.icon"
                  class="w-6 h-6 text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <h3
                  class="text-lg font-semibold text-gray-900 dark:text-white mb-1"
                >
                  {{ method.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {{ method.description }}
                </p>
                <p
                  class="text-primary-600 dark:text-primary-400 font-medium text-sm"
                >
                  {{ method.value }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Contact Form -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Start a Project</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Fill out the form below and I'll get back to you within 24 hours
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <!-- Success Message -->
          <UAlert
            v-if="submitSuccess"
            icon="i-ph-check-circle"
            color="success"
            variant="soft"
            title="Message sent successfully!"
            description="Thanks for reaching out. I'll get back to you within 24 hours."
            class="mb-6"
          />

          <!-- Error Message -->
          <UAlert
            v-if="submitError"
            icon="i-ph-warning-circle"
            color="error"
            variant="soft"
            :title="submitError"
            class="mb-6"
          />

          <UCard variant="soft">
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Personal Information -->
              <div class="grid gap-6 md:grid-cols-2">
                <UFormGroup label="Name *" required>
                  <UInput
                    v-model="form.name"
                    placeholder="Your full name"
                    required
                  />
                </UFormGroup>

                <UFormGroup label="Email *" required>
                  <UInput
                    v-model="form.email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </UFormGroup>
              </div>

              <UFormGroup label="Company" optional>
                <UInput
                  v-model="form.company"
                  placeholder="Your company name"
                />
              </UFormGroup>

              <!-- Project Details -->
              <div class="grid gap-6 md:grid-cols-2">
                <UFormGroup label="Project Type">
                  <USelect
                    v-model="form.project"
                    :options="projectTypes"
                    placeholder="Select project type"
                  />
                </UFormGroup>

                <UFormGroup label="Budget Range">
                  <USelect
                    v-model="form.budget"
                    :options="budgetRanges"
                    placeholder="Select budget range"
                  />
                </UFormGroup>
              </div>

              <UFormGroup label="Timeline">
                <USelect
                  v-model="form.timeline"
                  :options="timelineOptions"
                  placeholder="When do you need this completed?"
                />
              </UFormGroup>

              <!-- Message -->
              <UFormGroup label="Project Details *" required>
                <UTextarea
                  v-model="form.message"
                  placeholder="Tell me about your project, requirements, goals, and any specific features you need..."
                  :rows="6"
                  required
                />
              </UFormGroup>

              <!-- Submit Button -->
              <div class="text-center">
                <UButton
                  type="submit"
                  size="lg"
                  :loading="isSubmitting"
                  :disabled="!form.name || !form.email || !form.message"
                >
                  <UIcon name="i-ph-paper-plane-tilt" />
                  Send Message
                </UButton>
              </div>
            </form>
          </UCard>
        </div>
      </section>

      <!-- FAQ -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Common questions about working together
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <UAccordion>
            <UAccordionItem
              label="How do you handle project pricing?"
              :content="`I offer both hourly rates and fixed-price projects depending on your needs. For well-defined projects, I prefer fixed pricing to give you cost certainty. For ongoing work or projects with evolving requirements, hourly billing works better. I always provide detailed estimates upfront.`"
            />

            <UAccordionItem
              label="What's your typical project timeline?"
              :content="`Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I provide realistic timelines upfront and keep you updated throughout the project with regular progress reports.`"
            />

            <UAccordionItem
              label="Do you work with international clients?"
              :content="`Yes! I work with clients worldwide. I'm flexible with time zones and use modern communication tools to ensure smooth collaboration regardless of location. I'm experienced in remote work and maintain clear communication throughout projects.`"
            />

            <UAccordionItem
              label="What technologies do you specialize in?"
              :content="`I specialize in modern web technologies including Vue.js, Nuxt.js, React, Next.js, Node.js, and TypeScript. I also work with various databases, cloud platforms, and deployment tools. I choose the best technology stack for each project based on requirements.`"
            />

            <UAccordionItem
              label="Do you provide ongoing support after project completion?"
              :content="`Yes, I offer various support packages including bug fixes, feature updates, and technical support. I believe in long-term partnerships and want to ensure your project continues to succeed after launch.`"
            />

            <UAccordionItem
              label="Can you help with existing projects?"
              :content="`Absolutely! I can help with code reviews, performance optimization, feature additions, bug fixes, or taking over maintenance of existing projects. I'm experienced in working with legacy codebases and can quickly understand existing architectures.`"
            />
          </UAccordion>
        </div>
      </section>

      <!-- Availability -->
      <section
        class="text-center py-12 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl"
      >
        <div class="flex items-center justify-center gap-2 mb-4">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span class="text-green-600 dark:text-green-400 font-medium"
            >Available for new projects</span
          >
        </div>
        <h2 class="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p
          class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          I'm currently accepting new projects for Q2 2025. Let's discuss your
          requirements and create something amazing together.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            href="mailto:hello@mubaidr.com"
            external
            size="lg"
            variant="solid"
          >
            <UIcon name="i-ph-envelope" />
            Send Email
          </UButton>

          <UButton
            href="https://calendly.com/mubaidr"
            external
            size="lg"
            variant="outline"
          >
            <UIcon name="i-ph-calendar" />
            Schedule Call
          </UButton>
        </div>
      </section>
    </div>
  </div>
</template>

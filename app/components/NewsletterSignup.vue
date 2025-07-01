<script setup lang="ts">
import { ref } from "vue"

const email = ref("")
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref("")

const submitForm = async () => {
  if (!email.value) {
    errorMessage.value = "Please enter your email address"
    return
  }

  isSubmitting.value = true
  errorMessage.value = ""

  try {
    // Simulate API call - replace with actual newsletter service
    await new Promise((resolve) => setTimeout(resolve, 1000))

    isSuccess.value = true
    email.value = ""

    // Reset success message after 3 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 3000)
  } catch {
    errorMessage.value = "Something went wrong. Please try again."
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-gradient-to-r from-primary-600 to-blue-600 text-white py-16">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <!-- Lead Magnet Header -->
      <div class="space-y-4">
        <UBadge
          label="FREE RESOURCE"
          variant="solid"
          size="lg"
          class="bg-yellow-500 text-black"
        />
        <h2 class="text-3xl md:text-4xl font-bold">
          Get the Ultimate Web Development Checklist
        </h2>
        <p class="text-xl text-blue-100 max-w-2xl mx-auto">
          Download my comprehensive 50-point checklist that ensures your web
          project launches successfully. Used by 500+ developers and project
          managers worldwide.
        </p>
      </div>

      <!-- Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <UIcon name="i-ph-check-circle" class="w-5 h-5 text-green-300" />
          </div>
          <div class="text-left">
            <div class="font-semibold">Pre-Launch Checklist</div>
            <div class="text-sm text-blue-200">25 critical points</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <UIcon name="i-ph-rocket-launch" class="w-5 h-5 text-green-300" />
          </div>
          <div class="text-left">
            <div class="font-semibold">Performance Guide</div>
            <div class="text-sm text-blue-200">Speed optimization tips</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <UIcon name="i-ph-shield-check" class="w-5 h-5 text-green-300" />
          </div>
          <div class="text-left">
            <div class="font-semibold">Security Essentials</div>
            <div class="text-sm text-blue-200">Protect your users</div>
          </div>
        </div>
      </div>

      <!-- Newsletter Signup Form -->
      <div class="max-w-md mx-auto">
        <form class="space-y-4" @submit.prevent="submitForm">
          <div class="flex flex-col sm:flex-row gap-3">
            <UInput
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              size="lg"
              class="flex-1"
              :disabled="isSubmitting"
              required
            />
            <UButton
              type="submit"
              size="lg"
              variant="solid"
              color="primary"
              :loading="isSubmitting"
              :disabled="isSubmitting"
              class="whitespace-nowrap bg-white text-primary-600 hover:bg-gray-100"
            >
              <UIcon name="i-ph-download" />
              Get Free Checklist
            </UButton>
          </div>

          <div v-if="errorMessage" class="text-red-300 text-sm">
            {{ errorMessage }}
          </div>

          <div v-if="isSuccess" class="text-green-300 text-sm font-medium">
            ✅ Success! Check your email for the download link.
          </div>
        </form>

        <p class="text-xs text-blue-200 mt-4">
          No spam, ever. Unsubscribe anytime. Join 1,000+ developers getting
          weekly tips.
        </p>
      </div>

      <!-- Social Proof -->
      <div class="flex items-center justify-center gap-8 text-sm text-blue-200">
        <div class="flex items-center gap-2">
          <UIcon name="i-ph-download" class="w-4 h-4" />
          <span>500+ Downloads</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-ph-star-fill" class="w-4 h-4 text-yellow-300" />
          <span>4.9/5 Rating</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-ph-users" class="w-4 h-4" />
          <span>1,000+ Subscribers</span>
        </div>
      </div>
    </div>
  </div>
</template>

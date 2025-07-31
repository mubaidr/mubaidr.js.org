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
  <div>
    <!-- Lead Magnet Header -->
    <div class="space-y-4">
      <UBadge label="FREE RESOURCE" />
      <h2>Get the Ultimate Web Development Checklist</h2>
      <p class="max-w-2xl mx-auto">
        Download my comprehensive 50-point checklist that ensures your web
        project launches successfully. Used by 500+ developers and project
        managers worldwide.
      </p>
    </div>

    <!-- Benefits -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      <UCard class="flex items-center gap-3">
        <div class="w-10 h-10 flex items-center justify-center">
          <UIcon name="i-ph-check-circle" />
        </div>
        <div class="text-left">
          <div class="font-semibold">Pre-Launch Checklist</div>
          <div class="text-[10px] text-neutral-500 dark:text-neutral-400">
            25 critical points
          </div>
        </div>
      </UCard>
      <UCard class="flex items-center gap-3">
        <div class="w-10 h-10 flex items-center justify-center">
          <UIcon name="i-ph-rocket-launch" />
        </div>
        <div class="text-left">
          <div class="font-semibold">Performance Guide</div>
          <div class="text-[10px] text-neutral-500 dark:text-neutral-400">
            Speed optimization tips
          </div>
        </div>
      </UCard>
      <UCard class="flex items-center gap-3">
        <div class="w-10 h-10 flex items-center justify-center">
          <UIcon name="i-ph-shield-check" />
        </div>
        <div class="text-left">
          <div class="font-semibold">Security Essentials</div>
          <div class="text-[10px] text-neutral-500 dark:text-neutral-400">
            Protect your users
          </div>
        </div>
      </UCard>
    </div>

    <!-- Newsletter Signup Form -->
    <div class="max-w-md mx-auto">
      <form class="space-y-4" @submit.prevent="submitForm">
        <div class="flex flex-col sm:flex-row gap-3">
          <UInput
            v-model="email"
            type="email"
            placeholder="Enter your email address"
            size="xl"
            class="flex-1"
            :disabled="isSubmitting"
            required
          />
          <UButton
            type="submit"
            size="xl"
            :loading="isSubmitting"
            :disabled="isSubmitting"
            class="whitespace-nowrap"
          >
            <UIcon name="i-ph-download" />
            Get Free Checklist
          </UButton>
        </div>

        <div v-if="errorMessage">
          {{ errorMessage }}
        </div>

        <div v-if="isSuccess">
          ✅ Success! Check your email for the download link.
        </div>
      </form>

      <p class="mt-4">
        No spam, ever. Unsubscribe anytime. Join 1,000+ developers getting
        weekly tips.
      </p>
    </div>

    <!-- Social Proof -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      <UCard class="flex items-center gap-2">
        <UIcon name="i-ph-download" />
        <span>500+ Downloads</span>
      </UCard>
      <UCard class="flex items-center gap-2">
        <UIcon name="i-ph-star-fill" />
        <span>4.9/5 Rating</span>
      </UCard>
      <UCard class="flex items-center gap-2">
        <UIcon name="i-ph-users" />
        <span>1,000+ Subscribers</span>
      </UCard>
    </div>
  </div>
</template>

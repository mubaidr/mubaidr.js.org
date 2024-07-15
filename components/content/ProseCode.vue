<template>
  <div class="container group">
    <span
      v-if="filename"
      class="filename-text"
    >
      {{ filename }}
    </span>
    <span
      v-if="languageText"
      class="language-text"
    >
      {{ languageText }}
    </span>
    <slot />
    <div
      class="bottom-container opacity-100 group-hover:md:opacity-100 md:opacity-0 transition-opacity duration-150"
    >
      <div class="copy-container">
        <button
          @click="copy(code)"
          class="p-1 text-background border rounded-md border-background hover:border-brand_primary hover:bg-primary hover:text-background"
        >
          <IconsCheck
            v-if="copied"
            class="w-5 h-5"
            width="20"
            height="20"
          />
          <IconsCopy
            v-else
            class="w-5 h-5"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// https://mokkapps.de/blog/how-to-create-a-custom-code-block-with-nuxt-content-v2/
import { useClipboard } from '@vueuse/core'

const { copy, copied, text } = useClipboard()

const props = withDefaults(
  defineProps<{
    code?: string
    language?: string | null
    filename?: string | null
    highlights?: Array<number>
  }>(),
  { code: '', language: null, filename: null, highlights: [] }
)

const languageMap: Record<string, { text: string }> = {
  java: {
    text: 'Java',
  },
  javascript: {
    text: 'JavaScript',
  },
  python: {
    text: 'Python',
  },
}

const languageText = computed(() =>
  props.language ? languageMap[props.language]?.text : null
)
</script>

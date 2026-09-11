<template>
  <UPageSection
    title="How I work"
    description="Principles that guide every project"
    icon="ph:compass"
  >
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <UPageFeature
        title="Senior ownership"
        description="From requirements to architecture, implementation, deployment, and verification."
        icon="ph:crown"
        class="animate-fade-in-up"
      />
      <UPageFeature
        title="AI-augmented engineering"
        icon="ph:sparkle"
        class="animate-fade-in-up"
      >
        <template #description>
          <span>
            <a
              href="https://mubaidr.github.io/gem-team/"
              target="_blank"
              rel="noopener"
              class="text-primary underline underline-offset-2"
            >gem-team</a>
            and LLM tooling for research, coding, testing, and review — engineering judgment stays in the loop.
          </span>
        </template>
      </UPageFeature>
      <UPageFeature
        title="Focused environment"
        description="Linux, VS Code, containers, Git, and a minimal toolchain."
        icon="ph:terminal-window"
        class="animate-fade-in-up"
      />
      <UPageFeature
        title="Quality by default"
        description="Small changes, strong typing, automated checks, testing, production-aware decisions."
        icon="ph:shield-check"
        class="animate-fade-in-up"
      />
      <UPageFeature
        title="Async and focused"
        description="Clear written requirements, deep work, minimal meetings."
        icon="ph:moon"
        class="animate-fade-in-up"
      />
    </UPageGrid>
  </UPageSection>
</template>

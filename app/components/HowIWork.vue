<template>
  <UPageSection
    title="How I work"
    description="Principles that guide every project"
    icon="ph:compass"
  >
    <UPageGrid>
      <UPageFeature
        title="Senior ownership"
        description="I own the problem end-to-end - requirements, architecture, implementation, deployment, and verification. No hand-offs that break context."
        class="animate-fade-in-up"
      />
      <UPageFeature
        title="AI-augmented engineering"
        icon="ph:sparkle"
        class="animate-fade-in-up"
      >
        <template #description>
          <span>
            I use
            <a
              href="https://mubaidr.github.io/gem-team/"
              target="_blank"
              rel="noopener"
              class="text-primary underline underline-offset-2"
              >gem-team</a
            >
            and LLM tooling for research, coding, testing, and review - but
            engineering judgment stays in the loop. AI accelerates; it doesn't
            decide.
          </span>
        </template>
      </UPageFeature>
      <UPageFeature
        title="Focused toolchain"
        description="Linux, VS Code, containers, Git, and a minimal, well-understood stack. No cargo-culted complexity."
        icon="ph:terminal-window"
        class="animate-fade-in-up"
      />
      <UPageFeature
        title="Quality by default"
        description="Small, reviewable changes. Strong typing. Automated checks. Production-aware decisions at every step - not bolted on at the end."
        icon="ph:shield-check"
        class="animate-fade-in-up"
      />
      <UPageFeature
        title="Async and deep"
        description="Clear written requirements, deep work sessions, minimal meetings. I communicate well in writing and prefer substance over status updates."
        icon="ph:moon"
        class="animate-fade-in-up"
      />
      <UPageFeature
        title="Shipped, not abandoned"
        description="Projects get deployed and monitored. I stay involved through launch and handover - leaving teams with something they can maintain."
        icon="ph:rocket-launch"
        class="animate-fade-in-up"
      />
    </UPageGrid>
  </UPageSection>
</template>

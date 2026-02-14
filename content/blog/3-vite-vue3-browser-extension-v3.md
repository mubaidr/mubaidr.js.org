---
title: Kickstart Your Browser Extension Development
description: Quickly start building browser extensions with Vite, Vue 3, and
  Manifest V3. Discover a feature-rich, accessible starter template for modern
  web extension development.
headline: Kickstart Your Browser Extension Development with Vite, Vue 3, and Manifest V3
abstract: Our template is pre-packed with essential features, making it easier
  for you to focus on developing your extension rather than setting up the
  environment.
date: 2024-08-13T12:00:00.000Z
dateUpdated: 2024-08-13T12:00:00.000Z
author: Muhammad Ubaid Raza
authorUrl: /
featured: true
---

## Building Modern Browser Extensions: A Developer's Guide to Vite, Vue 3, and Manifest V3

Browser extensions have become an integral part of our daily web experience, from password managers to productivity tools. However, developing them can be challenging, especially when you want to use modern web technologies and maintain compatibility across different browsers.

After building several extensions and facing the same setup challenges repeatedly, I created a comprehensive starter template that combines the power of **Vue 3**, **Vite**, and **Manifest V3**. Today, I'll share why this combination is game-changing and how you can use it to build your next extension.

## The Evolution of Browser Extension Development

Before diving into the technical details, let's talk about why this matters. Browser extension development has evolved significantly over the past few years:

### The Manifest V3 Migration

Google's introduction of Manifest V3 brought significant changes to how extensions work:

- **Service Workers** replace background scripts
- **Stricter security policies** limit code execution
- **New APIs** for better performance and security
- **Enhanced privacy controls** for users

While these changes improve security and performance, they also mean that older development approaches no longer work. Many existing templates and tutorials are outdated, leaving developers to figure out the migration path themselves.

### Modern JavaScript Framework Challenges

Integrating modern frameworks like Vue.js or React with browser extensions isn't straightforward. You need to handle:

- Multiple entry points (popup, options, content scripts, background)
- Different execution contexts with varying capabilities
- Hot module replacement for development efficiency
- Production builds optimized for extension environments

## Why I Created This Template

After struggling with these challenges across multiple projects, I realized there was a need for a modern, comprehensive starter template. Here's what drove me to create it:

### 1. Development Speed

Setting up a modern browser extension from scratch can take days. This template gets you started in minutes.

### 2. Best Practices Built-In

The template incorporates years of learnings about extension architecture, security, and performance optimization.

### 3. Modern Tooling

Leverage the latest development tools without spending time on configuration.

### 4. Cross-Browser Compatibility

Write once, deploy everywhere (Chrome, Firefox, Edge, and other Chromium-based browsers).

## What Makes This Template Special

Let me walk you through the key features that make this template stand out:

### Vue 3 with Composition API

The template uses Vue 3's Composition API with `<script setup>` syntax, providing:

```vue
<script setup>
import { ref, onMounted } from "vue"
import { sendMessage } from "@/utils/messaging"

const isActive = ref(false)
const userSettings = ref({})

onMounted(async () => {
  const response = await sendMessage({ type: "GET_SETTINGS" })
  userSettings.value = response.data
})
</script>
```

This approach offers better TypeScript integration, improved performance, and a more intuitive development experience.

### Hot Module Replacement (HMR)

One of the biggest pain points in extension development is the slow feedback loop. Traditional development requires:

1. Making code changes
2. Building the extension
3. Reloading the extension in the browser
4. Testing the changes

With HMR, changes in your popup, options page, and even content scripts are reflected instantly. This dramatically speeds up development and makes the process much more enjoyable.

### Comprehensive TypeScript Support

The template includes full TypeScript support with:

- Type definitions for all browser APIs
- Proper typing for message passing between contexts
- IntelliSense support for extension-specific functionality
- Build-time type checking

```typescript
// types/messages.ts
export interface GetSettingsMessage {
  type: "GET_SETTINGS"
}

export interface SetSettingsMessage {
  type: "SET_SETTINGS"
  data: UserSettings
}

export type Message = GetSettingsMessage | SetSettingsMessage
```

### Automated Build Process

The template includes GitHub Actions workflows for:

- **Automated testing** on pull requests
- **Cross-browser builds** for Chrome and Firefox
- **Release automation** with proper versioning
- **Store submission preparation** with proper packaging

## Project Architecture Deep Dive

Let me show you how the template is structured and why each part matters:

### Directory Structure

```bash
src/
├── background/          # Service worker scripts
│   ├── index.ts
│   └── messaging.ts
├── content-script/      # Content script functionality
│   ├── index.ts
│   ├── components/
│   └── styles/
├── popup/              # Extension popup
│   ├── main.ts
│   ├── App.vue
│   └── components/
├── options/            # Options/settings page
│   ├── main.ts
│   ├── App.vue
│   └── components/
├── setup/              # Install/update pages
│   ├── install.vue
│   └── update.vue
├── offscreen/          # Offscreen documents
│   └── index.ts
├── components/         # Shared components
├── utils/             # Utility functions
└── types/             # TypeScript definitions
```

### Context Communication Made Simple

One of the most complex aspects of extension development is communication between different contexts. The template uses `webext-bridge` to simplify this:

```typescript
// In content script
import { sendMessage } from "webext-bridge/content-script"

const response = await sendMessage("get-user-data", { userId: 123 })

// In background script
import { onMessage } from "webext-bridge/background"

onMessage("get-user-data", async ({ data }) => {
  const userData = await fetchUserData(data.userId)
  return { success: true, userData }
})
```

This abstraction handles all the complexity of browser APIs while providing a clean, Promise-based interface.

### Advanced Features

#### Offscreen Documents

For capabilities that require DOM access but can't run in the service worker:

```typescript
// background/offscreen.ts
export async function createOffscreenDocument() {
  if (await chrome.offscreen.hasDocument()) return

  await chrome.offscreen.createDocument({
    url: "offscreen.html",
    reasons: ["AUDIO_PLAYBACK"],
    justification: "Playing notification sounds",
  })
}
```

#### Content Script Component Injection

Inject Vue components directly into web pages:

```vue
<!-- content-script/components/FloatingWidget.vue -->
<template>
  <div class="floating-widget">
    <UButton @click="handleAction"> Take Action </UButton>
  </div>
</template>

<script setup>
import { UButton } from "@/components/ui"

const handleAction = () => {
  // Interact with the page
}
</script>
```

## Getting Started: Your First Extension

Let's build a simple but practical extension together. We'll create a "Reading Time Calculator" that estimates how long it takes to read any article.

### 1. Setup

```bash
# Clone the template
pnpx degit mubaidr/vite-vue3-browser-extension-v3 reading-time-extension
cd reading-time-extension
npm install

# Start development
npm run dev
```

### 2. Configure the Extension

Update `manifest.config.ts`:

```typescript
export default {
  name: "Reading Time Calculator",
  description: "Calculate estimated reading time for any article",
  version: "1.0.0",
  permissions: ["activeTab", "storage"],
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["content-script/index.js"],
    },
  ],
}
```

### 3. Build the Content Script

```typescript
// content-script/index.ts
import { createApp } from "vue"
import ReadingTimeWidget from "./components/ReadingTimeWidget.vue"

// Calculate reading time
function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Inject the widget
function injectWidget() {
  const articleText = document.body.innerText
  const readingTime = calculateReadingTime(articleText)

  const container = document.createElement("div")
  container.id = "reading-time-widget"
  document.body.appendChild(container)

  createApp(ReadingTimeWidget, { readingTime }).mount(container)
}

// Run when page is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectWidget)
} else {
  injectWidget()
}
```

### 4. Create the Widget Component

```vue
<!-- content-script/components/ReadingTimeWidget.vue -->
<template>
  <div class="reading-time-widget">
    <div class="widget-content">
      <Icon name="clock" />
      <span>{{ readingTime }} min read</span>
    </div>
  </div>
</template>

<script setup>
interface Props {
  readingTime: number
}

defineProps<Props>()
</script>

<style scoped>
.reading-time-widget {
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 12px 16px;
  z-index: 10000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.widget-content {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
}
</style>
```

### 5. Test and Build

```bash
# Development with HMR
npm run dev

# Build for production
npm run build

# Build for specific browsers
npm run build:chrome
npm run build:firefox
```

## Advanced Development Patterns

### State Management Across Contexts

For complex extensions, you'll need shared state management:

```typescript
// utils/storage.ts
import { storage } from "webext-bridge/background"

export interface ExtensionState {
  settings: UserSettings
  cache: CacheData
  statistics: UsageStats
}

export const state = reactive<ExtensionState>({
  settings: {},
  cache: {},
  statistics: {},
})

// Sync with browser storage
export async function loadState() {
  const stored = await storage.get(["settings", "cache", "statistics"])
  Object.assign(state, stored)
}

export async function saveState() {
  await storage.set(toRaw(state))
}
```

### Error Handling and Logging

```typescript
// utils/logger.ts
export class ExtensionLogger {
  private context: string

  constructor(context: string) {
    this.context = context
  }

  error(message: string, error?: Error) {
    console.error(`[${this.context}] ${message}`, error)
    // Send to analytics or error reporting service
  }

  info(message: string, data?: any) {
    console.log(`[${this.context}] ${message}`, data)
  }
}

// Usage in different contexts
const logger = new ExtensionLogger("content-script")
logger.info("Extension initialized")
```

### Performance Optimization

```typescript
// utils/performance.ts
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Usage for expensive operations
const debouncedAnalysis = debounce(analyzePageContent, 500)
```

## Deployment and Distribution

### Store Submission Preparation

The template includes scripts to prepare your extension for store submission:

```bash
# Generate store-ready packages
npm run build:submission

# This creates:
# - chrome-extension.zip (for Chrome Web Store)
# - firefox-extension.zip (for Firefox Add-ons)
# - edge-extension.zip (for Microsoft Edge Add-ons)
```

### Automated Testing

```typescript
// tests/extension.test.ts
import { describe, it, expect } from "vitest"
import { calculateReadingTime } from "../src/utils/reading-time"

describe("Reading Time Calculator", () => {
  it("calculates reading time correctly", () => {
    const text = "This is a sample text with exactly ten words here."
    const time = calculateReadingTime(text)
    expect(time).toBe(1) // Should be 1 minute for 10 words
  })
})
```

### Continuous Integration

The template includes GitHub Actions for automated testing and building:

```yaml
# .github/workflows/ci.yml
name: CI/CD
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm install
      - run: npm run test
      - run: npm run build
```

## Real-World Examples and Use Cases

Let me share some successful extensions built with this template:

### 1. Productivity Tools

- **Focus Timer**: Pomodoro technique implementation with website blocking
- **Tab Manager**: Advanced tab organization and session management
- **Note Taker**: Quick note-taking with synchronized storage

### 2. Developer Tools

- **API Testing**: In-browser API testing and documentation
- **Color Picker**: Advanced color picking with format conversion
- **JSON Formatter**: Format and validate JSON on any page

### 3. Content Enhancement

- **Reading Assistant**: Text-to-speech and reading comprehension tools
- **Translation Helper**: Inline translation with multiple providers
- **Accessibility Enhancer**: Improve web accessibility on-the-fly

## Contributing to the Ecosystem

This template is open source, and I encourage contributions from the community. Here's how you can get involved:

### Feature Requests and Bug Reports

- Use the [GitHub Issues](https://github.com/mubaidr/vite-vue3-browser-extension-v3/issues) for bug reports
- Join our [Discord community](https://discord.gg/extensions) for discussions
- Share your success stories and extensions built with the template

### Contributing Code

- Check out the [contribution guidelines](https://github.com/mubaidr/vite-vue3-browser-extension-v3/blob/main/CONTRIBUTING.md)
- Look for "good first issue" labels for beginner-friendly contributions
- Help improve documentation and examples

## Future Roadmap

I'm continuously working on improving this template. Here's what's coming:

### Short Term (Next 3 months)

- **React version** of the template
- **Svelte support** for those who prefer it
- **Enhanced testing utilities** with extension-specific helpers
- **More comprehensive examples** for common use cases

### Long Term (6-12 months)

- **Visual extension builder** for non-developers
- **Extension analytics dashboard** for monitoring usage
- **Automated store submission** workflow
- **Extension marketplace** for template sharing

## Getting Help and Support

If you run into issues or have questions:

1. **Check the documentation** in the repository README
2. **Search existing issues** on GitHub
3. **Join our community** on Discord for real-time help
4. **Book a consultation** if you need professional assistance

## Final Thoughts: Building the Future of Browser Extensions

Browser extensions represent one of the most direct ways to improve people's daily web experience. With the right tools and approach, you can build extensions that genuinely make a difference in how people interact with the web.

This template removes the technical barriers that often prevent great ideas from becoming reality. Whether you're a seasoned developer or just starting out, you now have everything you need to build modern, performant, and maintainable browser extensions.

The web is constantly evolving, and so are the tools we use to extend it. By embracing modern development practices and staying current with browser capabilities, we can create extensions that not only work today but are built to adapt and grow with the platform.

What will you build? I can't wait to see the innovative extensions that emerge from this foundation. The future of browser extension development is bright, and I'm excited to be part of this journey with you.

Happy building, and remember—every great extension starts with a single idea and the courage to bring it to life!

---

**Ready to start building?** Clone the template today and join the community of developers creating the next generation of browser extensions.

[**Get the template →**](https://github.com/mubaidr/vite-vue3-browser-extension-v3)

[**Join our community →**](https://discord.gg/extensions)

[**Share your feedback →**](https://forms.gle/2nzS2AQkVGmqHTLV6)

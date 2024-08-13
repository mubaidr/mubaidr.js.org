---
title: Kickstart Your Browser Extension Development
description: Are you looking for a quick and efficient way to start building browser extensions with modern web technologies? Introducing our **Vite-powered WebExtension Starter Template**!
headline: My VSCode Setup
abstract: Our template is pre-packed with essential features, making it easier for you to focus on developing your extension rather than setting up the environment.
date: '2024-08-13T12:00:00'
dateUpdated: ''
author: Muhammad Ubaid Raza
authorUrl: /
#socialImage:
#  src: /img/blog/2-my-vscode-setup/typescript-dark.png
#  mime: png
#  alt: Workplace Screenshot
#  width: 1200
#  height: 630
---

# Kickstart Your Browser Extension Development with Vite, Vue 3, and Manifest V3

Are you looking for a quick and efficient way to start building browser extensions with modern web technologies? Introducing our **Vite-powered WebExtension Starter Template**! This template is designed to streamline your development process by combining **Vue 3**, **Vite**, and **Manifest V3**, enabling you to create powerful and efficient extensions for Chrome, Firefox, and other browsers.

## Why This Template?

Building a browser extension from scratch can be a daunting task, especially when you want to leverage the latest technologies like **Vue 3** and **Vite**. Our template is pre-packed with essential features, making it easier for you to focus on developing your extension rather than setting up the environment.

### Key Features

- **Vue 3 Composition API**: Harness the full power of Vue 3 with Composition API and `<script setup>`.
- **HMR (Hot Module Replacement)**: Get instant feedback with HMR support for extension pages and content scripts.
- **Tailwind CSS & daisyUI**: Style your extensions effortlessly with Tailwind CSS, enhanced by daisyUI components.
- **TypeScript**: Enjoy a type-safe development experience with full TypeScript support.
- **Automated Build Process**: Easily build and release your extension using GitHub Actions.
- **Webext-Bridge**: Simplify communication between contexts with Webext-Bridge.

### Full Feature List

- **Vue DevTools Support**: Debug your Vue applications in extension pages and content scripts.
- **Vue Router**: Automatic route registration powered by `unplugin-vue-router`.
- **Auto-Imported Components**: Automatically import components and icons with `unplugin-vue-components` and `unplugin-icons`.
- **Pre-configured ESLint & Prettier**: Maintain code quality with pre-configured ESLint and Prettier for Vue, JavaScript, and TypeScript.
- **UI Frameworks**: Utilize Tailwind CSS plugins for typography, forms, and more.
- **Multi-Browser Support**: Build for Chrome, Firefox, and other Chromium-based browsers with specific configurations.

## Usage Instructions

### Clone and Get Started

To get started, clone the template:

```bash
pnpx degit mubaidr/vite-vue3-browser-extension-v3 my-webext
cd my-webext
pnpm i
```

### Project Structure

The template is organized for easy navigation:

- **src**: Main source directory.
- **content-script**: Scripts and components for content scripts.
- **background**: Background scripts.
- **popup**: Popup Vue.js application.
- **options**: Options Vue.js application.
- **setup**: Pages for install and update events.
- **offscreen**: Offscreen pages for advanced functionalities like audio or screen recording.
- **components**: Shared Vue components.

### Development and Build

To start the development server:

```bash
pnpm dev
```

To build the extension for production:

```bash
pnpm build
```

### Browser Configurations

- **manifest.config.ts**: Base extension manifest.
- **vite.config.ts**: Base Vite configuration.

## Contribute and Provide Feedback

We're constantly working on improving this template, and your feedback is invaluable. Please take a moment to [fill out our feedback form](#) and let us know what features you'd like to see or if you'd be interested in purchasing the template once it's ready. Your responses will shape the future of this project.

## Final Thoughts

This Vite Vue 3 WebExtension template is designed to make your development experience smooth and efficient. Whether you’re building a simple utility or a complex extension, this template has you covered. Try it out and let us know what you think!

Happy coding!

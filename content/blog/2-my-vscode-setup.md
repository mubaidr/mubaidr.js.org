---
title: My VSCode Setup | Blog
description: Discover my minimalist VSCode setup with the Minimal Mist theme and custom settings for a distraction-free, accessible coding environment.
headline: My VSCode Setup
abstract: Learn how the Minimal Mist theme and custom VSCode settings create a clean, focused, and accessible coding environment.
date: 2024-07-17T12:00:00
dateUpdated: ""
author: Muhammad Ubaid Raza
authorUrl: /
socialImage:
  src: /img/blog/2-my-vscode-setup/typescript-dark.png
  mime: png
  alt: Screenshot of VSCode with Minimal Mist theme in dark mode
  width: 1200
  height: 630
---

# My VSCode Setup

Hello, fellow developers! I’m Muhammad Ubaid Raza, and I want to share my latest VSCode setup with you. I've crafted this environment to be as minimalist and distraction-free as possible, and I call it Minimal Mist. This theme and setup have greatly enhanced my coding experience, and I hope it can do the same for you.

**You can install this theme from the VSCode marketplace: [Minimal Mist - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=mubaidr.minimal-mist)**

## Features of Minimal Mist

### Subtle Background

I chose a soft and soothing background color `#f6f5f0`. This subtle hue reduces eye strain and creates a calm coding environment, perfect for long coding sessions.

### Shadow-Free Design

In my quest for a cleaner interface, I disabled shadows. This makes the interface feel lighter and less cluttered, allowing me to focus more on my code.

### Streamlined Borders

Borders can often add unnecessary visual noise, so I simplified, minimized, or removed them. This provides a clean and focused workspace that helps keep distractions at bay.

### Clean Look

Overall, the goal is a refined, distraction-free interface that lets me concentrate on what matters most—writing code.

### Unified Design

The dark theme maintains the same streamlined, shadow-free design and simplified borders for a cohesive look.

Minimal Mist, both in light and dark variants, is perfect for developers who value a clean, minimalist aesthetic.

## Preview

Here’s a preview of what you can expect:

#### TypeScript (Light Mode)

![Screenshot of VSCode with Minimal Mist theme in light mode, editing a TypeScript file](/img/blog/2-my-vscode-setup/typescript-light.png)

#### TypeScript (Dark Mode)

![Screenshot of VSCode with Minimal Mist theme in dark mode, editing a TypeScript file](/img/blog/2-my-vscode-setup/typescript-dark.png)

## My VSCode Settings

To further enhance the workspace setup, I use the following settings to reduce clutter and make my workspace even more minimal without sacrificing any functionality. You can add these settings to your `settings.json` file in VSCode to achieve the same look as in the screenshots above:

```json [settings.json]
"editor.renderLineHighlight": "none",
"editor.scrollbar.vertical": "hidden",
"window.commandCenter": false,
"window.menuBarVisibility": "compact",
"window.titleBarStyle": "custom",
"workbench.editor.tabActionCloseVisibility": false,
"workbench.editor.tabSizing": "fixed",
"workbench.editor.tabSizingFixedMaxWidth": 240,
"workbench.editor.tabSizingFixedMinWidth": 180,
"workbench.sideBar.location": "right",
"workbench.statusBar.visible": false,
"workbench.tree.indent": 22,
"workbench.tree.renderIndentGuides": "none"
```

**For complete settings and configuration details, please visit this gist:** [My VSCode Settings](https://gist.github.com/mubaidr/7ec5b5b2b72a2cbf948d53db9459abfd)

Happy Coding!

---
title: My VSCode Setup | Blog
description: Discover my minimalist VSCode setup with the Minimal Mist theme and
  custom settings for a distraction-free, accessible coding environment.
headline: My VSCode Setup
abstract: Learn how the Minimal Mist theme and custom VSCode settings create a
  clean, focused, and accessible coding environment.
date: 2024-07-17T12:00:00.000Z
dateUpdated: ""
author: Muhammad Ubaid Raza
authorUrl: /
socialImage:
  src: /img/blog/2-my-vscode-setup/typescript-dark.png
  mime: png
  alt: Screenshot of VSCode with Minimal Mist theme in dark mode
  width: 1200
  height: 630
featured: true
---

# My VSCode Setup: A Journey to Minimal Perfection

As developers, we spend countless hours staring at our code editors. The environment we work in significantly impacts our productivity, focus, and even our well-being. After years of experimenting with different themes, extensions, and configurations, I've finally crafted a VSCode setup that I absolutely love—and I'm excited to share it with you.

Meet **Minimal Mist**, a theme I created that embodies everything I believe a coding environment should be: clean, distraction-free, and easy on the eyes.

## The Philosophy Behind Minimal Mist

Before diving into the technical details, let me share the thinking behind this setup. I've always been drawn to minimalist design—not because it's trendy, but because it serves a purpose. When your environment is cluttered with unnecessary visual elements, your brain has to work harder to filter out the noise and focus on what matters: your code.

I wanted to create a theme that would:

- Reduce visual fatigue during long coding sessions
- Minimize distractions while maintaining essential functionality
- Provide excellent readability in both light and dark environments
- Feel modern and professional

**You can install Minimal Mist from the VSCode marketplace: [Minimal Mist - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=mubaidr.minimal-mist)**

## Why I Chose These Design Principles

### 1. Subtle Background Colors

The foundation of any good theme starts with the background. For the light theme, I chose `#f6f5f0`—a warm, off-white color that's much easier on the eyes than pure white. This subtle beige tone reduces the harsh contrast that can cause eye strain, especially during extended coding sessions.

For the dark theme, I selected a deep, muted background that provides enough contrast for text readability without being stark black. The goal was to create a sense of depth and comfort.

### 2. Shadow-Free Interface

One of the most impactful decisions I made was eliminating shadows throughout the interface. While shadows can add depth to a design, in a code editor, they often create visual noise that distracts from the content. Removing them results in a cleaner, more focused appearance that lets your code take center stage.

This approach also makes the interface feel lighter and more modern, aligning with contemporary design trends that favor clean, flat aesthetics.

### 3. Streamlined Borders

Borders, when overused, can fragment the interface and make it feel cluttered. I carefully reviewed every border in the VSCode interface and either removed, minimized, or softened them. The result is a more cohesive visual experience where related elements feel naturally grouped together.

### 4. Thoughtful Color Choices

The syntax highlighting in Minimal Mist uses a carefully curated palette that provides excellent contrast without being overwhelming. I chose colors that:

- Maintain semantic meaning (keywords, strings, comments each have distinct, logical colors)
- Work harmoniously together without creating visual chaos
- Remain accessible for users with different types of color vision

## Features That Make a Difference

### Unified Design Language

Both the light and dark variants of Minimal Mist follow the same design principles. This consistency means you can switch between themes based on your environment or time of day without feeling like you're using a completely different editor.

### Enhanced Readability

Every color choice was tested extensively to ensure optimal contrast ratios. Whether you're reading comments, scanning through function names, or debugging complex logic, the text remains crisp and easy to read.

### Reduced Eye Strain

The combination of subtle backgrounds, carefully chosen syntax colors, and reduced visual clutter helps minimize eye fatigue. This is particularly important for developers who spend 8+ hours a day looking at code.

## Visual Preview

Here's what you can expect from Minimal Mist in action:

#### TypeScript (Light Mode)

![Screenshot of VSCode with Minimal Mist theme in light mode, editing a TypeScript file](/img/blog/2-my-vscode-setup/typescript-light.png)

The light mode showcases the warm, subtle background that reduces glare while maintaining excellent readability. Notice how the syntax highlighting provides clear differentiation between different code elements without being overwhelming.

#### TypeScript (Dark Mode)

![Screenshot of VSCode with Minimal Mist theme in dark mode, editing a TypeScript file](/img/blog/2-my-vscode-setup/typescript-dark.png)

The dark mode offers a sophisticated, modern look that's perfect for low-light environments. The carefully balanced contrast ensures that you can code comfortably without straining your eyes.

## My Complete VSCode Configuration

A great theme is only part of the equation. To achieve the clean, minimal look shown in the screenshots, I've also customized various VSCode settings. Here's my complete configuration that you can add to your `settings.json`:

```json
{
  "editor.renderLineHighlight": "none",
  "editor.scrollbar.vertical": "hidden",
  "editor.scrollbar.horizontal": "hidden",
  "editor.minimap.enabled": false,
  "editor.lineNumbers": "relative",
  "editor.cursorBlinking": "smooth",
  "editor.fontFamily": "JetBrains Mono, Fira Code, monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
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
  "workbench.tree.renderIndentGuides": "none",
  "workbench.startupEditor": "none",
  "workbench.editor.enablePreview": false,
  "breadcrumbs.enabled": false,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false
}
```

### Breaking Down the Key Settings

Let me explain some of the most impactful settings:

**`"editor.renderLineHighlight": "none"`** - Removes the highlight on the current line, reducing visual clutter.

**`"editor.scrollbar.vertical": "hidden"`** - Hides the scrollbar to create a cleaner interface. You can still scroll normally.

**`"window.commandCenter": false"`** - Disables the command center in the title bar for a cleaner look.

**`"workbench.statusBar.visible": false"`** - Hides the status bar at the bottom, removing unnecessary information.

**`"workbench.sideBar.location": "right"`** - Moves the sidebar to the right, which I find less distracting when reading code.

**`"editor.lineNumbers": "relative"`** - Shows relative line numbers, which is incredibly useful for Vim-style navigation.

## Essential Extensions for a Complete Setup

While the theme and settings create the visual foundation, these extensions complete my development environment:

### Productivity Extensions

- **Vim** - For efficient text editing and navigation
- **GitLens** - Supercharges Git capabilities within VSCode
- **Auto Rename Tag** - Automatically renames paired HTML/XML tags
- **Bracket Pair Colorizer 2** - Makes matching brackets easier to identify
- **Path Intellisense** - Autocompletes filenames in import statements

### Language Support

- **ES7+ React/Redux/React-Native snippets** - Essential for React development
- **Vetur** or **Volar** - Vue.js language support
- **TypeScript Hero** - Organizes and manages TypeScript imports
- **Prettier** - Code formatting that works seamlessly with the theme

### Quality of Life

- **Material Icon Theme** - Provides clear, recognizable file icons
- **Indent Rainbow** - Subtle indentation guides that work well with the minimal aesthetic
- **Error Lens** - Inline error messages that don't clutter the interface

## Font Recommendations

The right font can significantly impact your coding experience. Here are my top recommendations that work beautifully with Minimal Mist:

1. **JetBrains Mono** (my current favorite) - Excellent readability and ligature support
2. **Fira Code** - Popular choice with great ligatures
3. **Cascadia Code** - Microsoft's developer font with excellent clarity
4. **Source Code Pro** - Clean and professional

## Customizing for Your Workflow

While I love my current setup, I recognize that everyone's needs are different. Here are some variations you might consider:

### For Beginners

- Keep the status bar visible: `"workbench.statusBar.visible": true`
- Enable breadcrumbs: `"breadcrumbs.enabled": true`
- Show the minimap: `"editor.minimap.enabled": true`

### For Vim Users

- Install the Vim extension
- Use relative line numbers: `"editor.lineNumbers": "relative"`
- Consider adding custom keybindings for your workflow

### For Pair Programming

- Increase font size: `"editor.fontSize": 16`
- Enable word wrap: `"editor.wordWrap": "on"`
- Show the minimap for easier navigation: `"editor.minimap.enabled": true`

## The Complete Setup

For those who want to get the exact look from my screenshots, here's everything you need:

1. **Install Minimal Mist theme** from the VSCode marketplace
2. **Copy the settings** from the JSON configuration above
3. **Install a good programming font** like JetBrains Mono
4. **Add the recommended extensions** based on your development needs

**For the complete settings file and additional configurations, check out this gist:** [My Complete VSCode Settings](https://gist.github.com/mubaidr/7ec5b5b2b72a2cbf948d53db9459abfd)

## Final Thoughts

Creating Minimal Mist and this setup has been a journey of continuous refinement. What started as a simple desire for a cleaner interface has evolved into a comprehensive development environment that I genuinely enjoy using every day.

The goal isn't just to make things look pretty—it's to create an environment that helps you focus on what matters most: writing great code. When your tools get out of the way, you can concentrate on solving problems and building amazing things.

I encourage you to try this setup and then customize it to fit your specific needs. The beauty of VSCode is its flexibility—there's no one-size-fits-all solution, but hopefully, this gives you a great starting point.

What aspects of your development environment matter most to you? I'd love to hear about your own setup and any improvements you make to this one.

Happy coding, and may your development environment bring you as much joy as it brings me!

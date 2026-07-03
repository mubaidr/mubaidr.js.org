---
title: "Gem Team v1.20.0: Marketplace Integration, APM Structure, and Enhanced Install Experience"
description: "A deep dive into the latest Gem Team release featuring marketplace support for multiple AI tools, APM-compatible structure, simplified installation, and improved developer experience."
date: 2026-05-09T00:00:00.000Z
dateUpdated: 2026-05-09T00:00:00.000Z
author: mubaidr
tags:
  - AI
  - Gem Team
  - Automation
  - Development Workflow
  - Agents
  - Open Source
  - Release
readingTime: "6 min read"
featured: true
socialImage:
  src: /img/blog/35-gem-team-v1.20/banner.svg
  mime: svg
  alt: "Gem Team v1.20.0 - marketplace integration, APM structure, and enhanced installation experience"
  width: 1200
  height: 680
series: "AI-Powered Development"
seriesOrder: 4
seriesDescription: "Exploring how AI is transforming software development"
---

Since introducing gem-orchestrator last month, the Gem Team project has evolved rapidly. Version 1.20.0 brings major improvements in distribution, installation, and project structure - making it easier than ever to integrate AI-powered workflows into your development environment.

In this post, I'll walk you through what's new, why these changes matter, and how they improve the developer experience.

## What's New in v1.20.0

### Marketplace Integration for All Major AI Tools

The biggest change: Gem Team is now available as a marketplace package for **GitHub Copilot**, **Claude Code**, **Cursor**, and **OpenCode**. No more manual file copying or symlinking - just one command to install across all your AI coding tools.

```bash
# Install APM (AI Package Manager) first
curl -fsSL https://microsoft.github.io/apm/install.sh | sh

# Then install Gem Team
apm install mubaidr/gem-team
```

APM handles the rest - detecting your installed AI tools and deploying the agents to the correct locations automatically.

**Why this matters:** Lower barrier to entry means faster adoption. You can try Gem Team in minutes, not hours.

### APM-Compatible Project Structure

The agent definitions have been moved to `.apm/agents/` to align with the AI Package Manager standard. This change brings several benefits:

- **Cleaner project root** - No more clutter from agent definitions
- **Better compatibility** - Works seamlessly with APM's dependency management
- **Hidden from source control** - `.apm/` is typically gitignored, reducing repo size
- **Multi-version support** - Different projects can use different Gem Team versions

The plugin manifest (`plugin.json`) at the project root now references the APM location, making the package self-contained and portable.

```json
{
  "name": "gem-team",
  "version": "1.20.0",
  "agents": ".apm/agents/",
  "permissions": ["memory", "file-system", "subagent"],
  "capabilities": ["orchestration", "planning", "testing", "review"]
}
```

### Enhanced Installation Documentation

The README and installation guide have been completely rewritten to reflect the new multi-method approach:

1. **APM install** (recommended) - one command for all tools
2. **Marketplace registration** - install via your tool's marketplace
3. **Manual install** - still supported for advanced users

The docs now include clear, step-by-step instructions for each AI tool, with troubleshooting tips and verification steps.

### EditorConfig for Consistent Formatting

To ensure all contributors follow consistent code style, an `.editorconfig` file has been added:

```ini
# EditorConfig is awesome: https://EditorConfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.{sh,py}]
indent_size = 4

[*.md]
trim_trailing_whitespace = false
```

This helps maintain clean diffs and consistent formatting across different editors and IDEs.

### Context7 Configuration

A `context7.json` file has been added to provide rich metadata for Context7 integration. This improves documentation lookup and code example discovery when using Gem Team with tools that support Context7.

### Custom Domain Setup

The project now has a custom domain: [gem-team.js.org](https://gem-team.js.org) - easier to share and remember than the GitHub Pages URL. The `CNAME` file configures this for GitHub Pages.

## Under-the-Hood Improvements

### Agent Metadata Refinements

All agent definitions have been updated with proper `mode` and `hidden` flags. This clarifies which agents are subagents (invoked by the orchestrator) and which are top-level entry points. The documentation now reflects these distinctions more accurately.

### License Update

The copyright year has been updated to 2026, and ownership is clearly attributed.

### Better .gitignore

The `.gitignore` has been expanded to cover all common build artifacts, logs, coverage reports, diagnostics, caches, and generated files. This keeps the repository clean and reduces noise in PRs.

## What's Next

The roadmap for Gem Team includes:

- **Phase 8 Final Review automation** - deeper architecture validation before completion
- **Enhanced mobile testing** - Detox and Maestro integration for React Native/Flutter
- **Performance profiling** - automatic bottleneck detection and optimization suggestions
- **More design agents** - specialized UI/UX patterns for different industries

## How to Upgrade

If you installed Gem Team before v1.20.0:

```bash
# Update via APM
apm update gem-team

# Or reinstall via marketplace
# Search for "gem-team" in your AI tool's marketplace
```

Your existing memory files and customizations will be preserved. The upgrade is fully backward compatible.

## Try It Today

Gem Team v1.20.0 is available now. Whether you're building web apps, mobile apps, or complex backend systems, the multi-agent orchestration harness can help you ship higher-quality code faster.

```bash
apm install mubaidr/gem-team
```

Then describe your next development goal and watch the team work:

```txt
> Implement OAuth2 authentication with refresh token rotation and secure cookie storage
```

The orchestrator will detect the complexity, route through research and planning, and execute with wave-based parallelism - all while maintaining traceability and quality gates.

---

_This post is part of the [AI-Powered Development series](/blog/series/ai-powered-development). Previous: [Introducing gem-orchestrator](/blog/34-gem-team-orchestrator)._

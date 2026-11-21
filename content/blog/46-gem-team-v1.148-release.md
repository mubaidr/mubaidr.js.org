---
title: "Gem Team v1.124–1.148: What Changed"
description: "A concise summary of Gem Team releases v1.124 through v1.148 — output standardization, rule cleanup, and new features."
excerpt: "Gem Team shipped 25 releases between v1.124 and v1.148. Here's what changed, summarized for developers."
headline: "Gem Team v1.124–1.148: What Changed"
abstract: "A concise, developer-focused summary of Gem Team releases v1.124 through v1.148. Covers output format standardization, rule normalization, new features like parallel execution and named specialist delegation, and the v1.148 housekeeping release."
date: 2026-11-21T00:00:00.000Z
dateUpdated: 2026-11-21T00:00:00.000Z
author: mubaidr
authorUrl: https://mubaidr.js.org
featured: true
tags:
  - Gem Team
  - AI Agents
  - Release Notes
  - Developer Tools
readingTime: "3 min read"
socialImage:
  src: /img/blog/46-gem-team-v1.148/banner.svg
  mime: svg
  alt: "Gem Team v1.148 - diamond gem icon with feature pills on dark background"
  width: 1200
  height: 630
---

## Gem Team v1.124–1.148: What Changed

Gem Team shipped 25 releases between v1.124 and v1.148. Mostly housekeeping — no headline features — but the cumulative effect is a tighter, more predictable system. Here's what changed, summarized for developers.

### Output standardization

- **Output format rules** standardized across agents (v1.148) — blocked status, retry reasons, revision findings, confidence scores all follow the same structure.
- **Raw JSON capitalization** standardized in agent output format comments (v1.148).
- **Handoff schemas** standardized with memory checks (v1.133), plus `relevant_context` and `stable_findings` added to handoff output (v1.139).
- **Output hygiene rules** aligned across agent definitions (v1.123, v1.127).

### Rule cleanup & normalization

- Removed redundant directives and reuse rules across agent definitions (v1.129–v1.133).
- Normalized agent documentation format, ASCII character rules, and dash characters (v1.143, v1.140).
- Normalized agent descriptions, output format, and phase 3 execution flow (v1.141).
- Restructured agent documentation across orchestrator, planner, browser-tester, and implementer (v1.145–v1.146).

### Orchestrator & planner tightening

- Persistent plan enforcement and planner storage contract tightened (v1.134).
- Failure handling rules and critic-only fields added to the orchestrator spec (v1.139).
- `needs_retry` status added to the planner spec (v1.139).
- `LOW` complexity level added to the complexity contract (v1.142).
- Orchestrator status reporting updated (v1.147).
- Plan IDs and references updated from 2025 to 2026 (v1.148).

### New features

- **Parallel execution** for independent tool calls across agents (v1.135).
- **YAGNI/KISS principles** clarified in planning and implementation guidelines (v1.136).
- **Named specialist subagent delegation** for every task (v1.137).
- **gem-mobile-tester** support for projects with a configured e2e runner (v1.141).

### Bug fix

- Fixed [#227](https://github.com/mubaidr/gem-team/issues/227) (v1.138).

### v1.148 (latest)

The current release is housekeeping: refined code simplifier refactoring guideline, standardized agent output format rules structure, Raw JSON capitalization, and plan ID/2025→2026 reference updates.

---

**Get started:**

```bash
apm install mubaidr/gem-team --target copilot,claude,cursor,opencode,codex,gemini,windsurf
```

[GitHub](https://github.com/mubaidr/gem-team) · [Documentation](https://mubaidr.github.io/gem-team/)

---
title: "How I Finally Enabled SWR on My Nuxt + Laravel App"
description: "Tracing a Set-Cookie leak in Nuxt SSR that broke SWR caching — the fix was a two-line guard, not a framework change."
excerpt: "My SSR API client was blindly forwarding Set-Cookie headers from Laravel into the SWR cache. Here's how I traced and fixed it."
headline: "How I Finally Enabled SWR on My Nuxt + Laravel App"
abstract: "Diagnosing and fixing a Set-Cookie header leak in Nuxt SSR that prevented safe use of SWR caching with a Laravel backend. Covers the root cause, the two-line fix, and the verification steps that made enabling SWR safe."
date: 2026-09-12T00:00:00.000Z
dateUpdated: 2026-09-12T00:00:00.000Z
author: mubaidr
authorUrl: https://mubaidr.js.org
featured: true
tags:
  - Nuxt
  - Laravel
  - SWR
  - Caching
  - SSR
  - Set-Cookie
  - Performance
readingTime: "5 min read"
socialImage:
  src: /img/blog/45-nuxt-swr-set-cookie-leak/banner.svg
  mime: svg
  alt: "SWR cache Set-Cookie leak diagram showing Nuxt SSR forwarding Laravel cookies into cached responses"
  width: 1200
  height: 630
---

## How I Finally Enabled SWR on My Nuxt + Laravel App

I've been running a Nuxt 4 frontend with a Laravel 12 backend for a rental marketplace. For over a year, SWR caching on public pages sat commented out in my config:

```ts
// Important: SWR breaks authenticaiton, somehow.
// Because cached requests and old cookie behviour.
// Must not enable until we have some solid fix ready
```

I finally traced it. The issue was real — my SSR API client was blindly forwarding every `Set-Cookie` header from the Laravel backend to the browser. On SWR routes, those cookies got baked into the cached HTML and leaked to the next visitor.

## The Problem

My `useApi.ts` does something pretty standard for Nuxt + external API setups: during SSR, it forwards all cookies from the incoming request to the backend, then relays all `Set-Cookie` headers back to the client response. This is how session cookies get relayed when the browser talks to the Nuxt origin, not Laravel directly.

The problem: on an SWR-cached page, Nitro regenerates the cache by running SSR. If that SSR makes any API call that returns a `Set-Cookie` header, that cookie gets relayed into the response — and then **cached and served to every subsequent visitor**.

```ts
// The old code — forwards Set-Cookie on EVERY SSR response
if (import.meta.server && event) {
  const setCookies = response.headers.getSetCookie()
  for (const c of setCookies) {
    appendResponseHeader(event, "set-cookie", c)
  }
}
```

Even on public pages where no auth calls happen during SSR, the blanket relay means **any** future endpoint that returns a cookie — session rotation, CSRF tokens, rate limiting — would silently leak into the SWR cache. It was a ticking time bomb.

## The Fix

Two changes. That's it.

### 1. Skip Set-Cookie forwarding on cached routes

In `useApi.ts`, check Nitro's `event.context.routeRules` before forwarding. If the route has `swr` or `isr`, don't relay the cookies:

```ts
if (import.meta.server && event) {
  const rules = event.context.routeRules as Record<string, unknown> | undefined
  const isCachedRoute = rules && ("swr" in rules || "isr" in rules)

  if (!isCachedRoute) {
    const setCookies = response.headers.getSetCookie()
    for (const c of setCookies) {
      appendResponseHeader(event, "set-cookie", c)
    }
  }
}
```

Non-cached routes (authenticated pages, account, admin) still get the full cookie relay. SWR routes get a clean, cookie-free response.

### 2. Uncomment the SWR routes

```diff
- // ...swrRouteRules,
+ ...swrRouteRules,
```

## Why It Was Safe to Enable

Before flipping the switch, I verified three things:

1. **Middleware short-circuits on `auth: false` routes.** My auth middleware calls `validateServerSideAuth()`, but when `definePageMeta({ auth: false })` is set, it returns immediately — no cookie reads, no API calls on the server side.

2. **The header is `<ClientOnly>`.** Auth-dependent UI (login buttons, user avatar) is wrapped in `<ClientOnly>` with a skeleton fallback. No user data ends up in the cached HTML.

3. **Public endpoints don't set cookies.** I verified: `/v1/public/settings`, `/v1/public/properties/{id}`, `/amenities/available` — zero `Set-Cookie` headers. The guard is belt and suspenders.

## References

The Nuxt team has been clear about this across several issues:

- **[Daniel Roe on Set-Cookie in cached routes](https://github.com/nuxt/nuxt/issues/31733):** _"Cookies/headers are not supported when caching routes (as the response needs to be cacheable)."_
- **[SWR cache saving Set-Cookie was a bug](https://github.com/nuxt/nuxt/issues/28527):** Fixed upstream in Nitro v3/ocache — Nuxt 5 no longer stores or replays Set-Cookie for SWR routes. But if you're on Nuxt 4, you need to handle it yourself.
- **[nuxt-auth-utils #311](https://github.com/atinux/nuxt-auth-utils/issues/311):** Same scenario — SWR route shows `loggedIn=false`. Their fix: client-side session fetch via `app:mounted` hook.
- **[Nuxt Discussion #20014](https://github.com/nuxt/nuxt/discussions/20014):** _"Those cached pages are meant to be stateless as they will be sent to anyone who visits that page."_
- **[Nuxt #13096](https://github.com/nuxt/nuxt/issues/13096):** The foundational design decision — Set-Cookie forwarding from SSR API calls is opt-in, not default, for exactly this reason.

## What I'd Tell Myself a Year Ago

The "somehow" in the comment was the problem. The fix is a two-line guard. If you're staring at a commented-out SWR config with a vague "it breaks auth" note — check your `Set-Cookie` relay. That's probably it.

---

_Built with Nuxt 4.5+, Laravel 12, and a year of unnecessary fear._

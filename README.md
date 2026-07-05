# MKFF — Malmar Knowles Family Foundation

One-page website for **mkff.org** built with **Next.js 16** App Router, React 19, TypeScript, Tailwind 4, and hosted on Vercel.

## About

The Malmar Knowles Family Foundation (MKFF) is a private foundation based in Atlanta, Georgia. Its flagship initiative is the **Kectil Program** (kectil.com), a one-year leadership and mentorship program for talented youth ages 17–26 from developing and least-developed countries.

## Current Design

The site follows the Paper landing design for mkff.org:

- Editorial cream base with oxblood, deep maroon, and gold accents
- Inter, Schibsted Grotesk, and Fraunces via `next/font`
- Compact nav, large typographic hero, dark stats band, table-style program rows, founder/leadership section, engage cards, and deep footer
- Direct Kectil, email, and social links instead of an on-page contact form

## Local Development

```bash
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

Use browser QA for public UI changes, including desktop and mobile widths, before release.

## Key Links

- Program and applications: https://kectil.com
- News and stories: https://kectil.com/posts

Deploys are managed through Vercel. Add or verify the custom domain `mkff.org` and `www.mkff.org` in the Vercel dashboard when publishing.

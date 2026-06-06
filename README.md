# MKFF — Malmar Knowles Family Foundation

Beautiful one-page website for **mkff.org** built with **Next.js 16+** (App Router, React 19, TypeScript, Tailwind) and hosted on **Vercel**.

## About the Organization
The Malmar Knowles Family Foundation (MKFF) is a 501(c)(3) private foundation based in Atlanta, GA. Its flagship initiative is the **Kectil Program** (kectil.com) — a free one-year leadership and mentorship program for talented youth (17–26) from developing and least-developed countries.

- 10 years • 20,900+ youth leaders • 100+ countries
- 100% of charitable disbursements go to programs
- Volunteer leadership (Sherry M. Knowles, Brooke M. Shafer, Christopher Zalesky)
- See full research-backed details and sources in the implementation plan

## Tech & Design
- Next.js 16 + TypeScript + Tailwind 4
- Framer Motion (subtle, reduced-motion compliant)
- React Hook Form + Zod + Sonner toasts
- Fully follows [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) and Next.js best practices (semantic HTML, focus-visible, proper images, no `transition:all`, etc.)
- One-page with smooth internal navigation, animated stats, accessible form
- SEO: metadata, Open Graph, JSON-LD for NonprofitOrganization

## Local Development
```bash
npm run dev
```

## Build & Deploy
```bash
npm run build
npm run lint
```

Deploy to Vercel (connected to this repo). Add custom domain `mkff.org` (and www) in the Vercel dashboard after first deploy. DNS configuration is handled via Vercel.

## Contact Form
The form is fully functional on the client with validation. For production email delivery:
1. Sign up for [Resend](https://resend.com)
2. Add `RESEND_API_KEY` in Vercel Environment Variables
3. Replace the placeholder submit logic in `components/ContactForm.tsx` (or move to a Server Action) with a real `Resend` call.

See `.env.example`.

## Assets
- Replace placeholder imagery / add real high-resolution photos of Kectil conferences, youth leaders, and leadership headshots (respect licenses).
- Current OG image is a generated professional graphic.

## Key Links (in site)
- Program & applications: https://kectil.com
- News & stories: https://kectil.com/posts
- Financial transparency: ProPublica 990-PF

For the full implementation plan, component breakdown, content sources, and verification steps, refer to the plan file in the session directory.

Built with care to reflect the professionalism, global reach, and hopeful mission of the Malmar Knowles Family Foundation.

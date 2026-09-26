---
id: "0539"
title: "MKFF: Complete mkff.org launch readiness review"
status: open
priority: high
assignee:
lease_expires:
scope: "Imported from Linear KEC-539. Stay inside that description."
acceptance: "All blocker tickets are complete or explicitly waived by stakeholder decision."
files: []
commit:
reason:
created: "2026-07-05T18:21:34.970Z"
linear_id: "KEC-539"
linear_url: "https://linear.app/teton-web-ventures/issue/KEC-539/mkff-complete-mkfforg-launch-readiness-review"
linear_status: "Todo"
linear_status_type: "unstarted"
linear_team: "KEC"
linear_project: "mkff.org"
linear_assignee: "David Solheim <david@tetonweb.com>"
linear_labels: ["Improvement"]
linear_priority: "High"
linear_parent: ""
linear_cycle: ""
linear_due: "2026-07-10"
linear_updated: "2026-07-10T06:55:19.904Z"
linear_archived: false
notion_page_id: "3e71027c-242b-81fb-98d9-c999e65fb5aa"
notion_url: "https://app.notion.com/p/3e71027c242b81fb98d9c999e65fb5aa"
---

## Linear import

- Identifier: KEC-539
- URL: https://linear.app/teton-web-ventures/issue/KEC-539/mkff-complete-mkfforg-launch-readiness-review
- Linear status: Todo (unstarted)
- Queue status: open
- Team: Kectil (KEC)
- Project: mkff.org
- Assignee: David Solheim <david@tetonweb.com>
- Labels: Improvement
- Parent: none
- Priority: High
- Estimate: none
- Cycle: none
- Due: 2026-07-10
- Created: 2026-07-05T18:21:34.970Z
- Updated: 2026-07-10T06:55:19.904Z
- Completed: no
- Canceled: no
- Archived: no
- Branch: david/kec-539-mkff-complete-mkfforg-launch-readiness-review

Queue status follows Water Cooler Protocol. Todo, In Progress, In Review, Triage, and Backlog are `open` so the import does not take a ticket lease or start a review. Done, Canceled, and Blocked use those folders. `linear_status` is the Linear status at import.

## Description

## Goal

Complete the final launch-readiness pass for `mkff.org` after the transcript-driven content, cleanup, and positioning issues are implemented.

## Source

* Transcript: `/Users/davidsolheim/Dropbox/David Solheim/Downloads/kectil-alumni-transcript-7-5-26.txt`
* Project urgency: Sherry said she would love to get MKFF up this week because people may search for MKFF after the Global Youth Index announcement.
* Repo: `/Users/davidsolheim/GitHub/mkff`

## Scope

* Verify `mkff.org` and `www.mkff.org` domain readiness in Vercel before public launch.
* Confirm SEO basics: title/description, canonical URL, Open Graph image, sitemap, robots, and indexability.
* Run required checks from the repo README: `npm run lint` and `npm run build`.
* Browser QA desktop and mobile widths for nav, About MKFF sections/dropdowns, leadership/director content, footer, CTAs, and responsive text wrapping.
* Generate/share a review link for Sherry after implementation.
* Confirm no financial filing/EIN/tax-return references remain on public surfaces.

## Acceptance Criteria

* All blocker tickets are complete or explicitly waived by stakeholder decision.
* `npm run lint` and `npm run build` pass.
* Desktop and mobile browser QA pass with no broken layout, overlapping text, or missing images.
* `mkff.org` and `www.mkff.org` point to the correct deployment and are publicly accessible when launch is approved.
* Sitemap/robots/canonical metadata are correct for public launch.
* Sherry receives a review link before broader announcement traffic.

## Linear comments

### David Solheim — 2026-07-07T02:50:35.877Z

Release handoff update: commit `e437178` has now been fast-forwarded and pushed to `origin/main`.

Read-back:
- Local `main`: `e43717840e163936cddb5d0d1c446f0657c2bc08`
- `origin/main`: `e43717840e163936cddb5d0d1c446f0657c2bc08`
- Divergence after fetch: `0 0`
- Pre-push checks passed: `npm run lint`, `npm run build`, `git diff --check`, and targeted prohibited-content grep.

No GitHub Actions runs were listed for `main`, and this local checkout does not include a `.vercel/project.json`, so deployment/live-domain verification still belongs to this launch-readiness ticket.

### David Solheim — 2026-07-05T18:51:07.108Z

Prerequisite handoff: KEC-534 through KEC-538 are now completed in local commit `e437178` on branch `codex/kec-534-mkff-unblocked-issues`.

Remaining scope for this launch-readiness ticket:
- Review the final branch after push/PR or deployment preview is available.
- Confirm `mkff.org` / `www.mkff.org` domain and Vercel deployment state.
- Re-run public launch checks against the actual deployed URL, including gate/public visibility decision, metadata, robots/sitemap, desktop/mobile browser QA, and stakeholder review link.

This ticket is intentionally left open because the current batch did not push/deploy or perform the live launch-readiness pass.


---
id: "0534"
title: "MKFF: Remove public financial and filing references"
status: done
priority: high
assignee:
lease_expires:
scope: "Imported from Linear KEC-534. Stay inside that description."
acceptance: "No public-facing mkff.org page exposes EIN/tax ID, public filings, annual reports, tax returns, ProPublica links, or 990-PF references."
files: []
commit:
reason:
created: "2026-07-05T18:20:56.914Z"
linear_id: "KEC-534"
linear_url: "https://linear.app/teton-web-ventures/issue/KEC-534/mkff-remove-public-financial-and-filing-references"
linear_status: "Done"
linear_status_type: "completed"
linear_team: "KEC"
linear_project: "mkff.org"
linear_assignee: "David Solheim <david@tetonweb.com>"
linear_labels: ["Bug"]
linear_priority: "High"
linear_parent: ""
linear_cycle: ""
linear_due: ""
linear_updated: "2026-07-05T18:50:31.442Z"
linear_archived: false
notion_page_id: "3e71027c-242b-81ff-a083-ed7432dcb59d"
notion_url: "https://app.notion.com/p/3e71027c242b81ffa083ed7432dcb59d"
---

## Linear import

- Identifier: KEC-534
- URL: https://linear.app/teton-web-ventures/issue/KEC-534/mkff-remove-public-financial-and-filing-references
- Linear status: Done (completed)
- Queue status: done
- Team: Kectil (KEC)
- Project: mkff.org
- Assignee: David Solheim <david@tetonweb.com>
- Labels: Bug
- Parent: none
- Priority: High
- Estimate: none
- Cycle: none
- Due: none
- Created: 2026-07-05T18:20:56.914Z
- Updated: 2026-07-05T18:50:31.442Z
- Completed: 2026-07-05T18:50:31.425Z
- Canceled: no
- Archived: no
- Branch: david/kec-534-mkff-remove-public-financial-and-filing-references

Queue status follows Water Cooler Protocol. Todo, In Progress, In Review, Triage, and Backlog are `open` so the import does not take a ticket lease or start a review. Done, Canceled, and Blocked use those folders. `linear_status` is the Linear status at import.

## Description

## Goal

Remove public financial/tax-return surfacing from `mkff.org` per stakeholder direction in the July 5, 2026 transcript.

## Source

* Transcript: `/Users/davidsolheim/Dropbox/David Solheim/Downloads/kectil-alumni-transcript-7-5-26.txt`
* Relevant stakeholder direction: Sherry asked to remove public filings, annual reports, 501(c)(3) filings, EIN/tax ID, and any financial-facing content from the MKFF site.
* Repo evidence from audit: `components/MKFFooter.tsx` currently includes ProPublica links for Annual Report and 501(c)(3) Filings plus an EIN; `components/Leadership.tsx` currently includes a Financials/Public 990-PF card.

## Scope

* Remove public financial filing links, including ProPublica/public tax-return links.
* Remove `Annual Report` and `501(c)(3) Filings` footer links.
* Remove EIN/tax ID from public footer or other visible surfaces.
* Remove the Leadership `Financials / Public 990-PF filings` card and related copy.
* Audit metadata, structured data, footer, nav, CTA cards, and visible page content for financial/filing references.
* Keep any generic legal-status wording only if it does not expose filings, EIN, tax returns, or invite financial scrutiny; otherwise route for Sherry review.

## Acceptance Criteria

* No public-facing `mkff.org` page exposes EIN/tax ID, public filings, annual reports, tax returns, ProPublica links, or 990-PF references.
* Leadership section has only people/director content, not financial-card content.
* Footer contains no financial/filing links.
* Site still communicates MKFF mission and legitimacy without financial details.
* `npm run lint` and `npm run build` pass after implementation.

## Linear comments

### David Solheim — 2026-07-05T18:50:17.702Z

Closeout: implemented in local commit `e437178` on branch `codex/kec-534-mkff-unblocked-issues`.

What changed:
- Removed public ProPublica/annual report/501(c)(3) filings/EIN/tax-positioning surfaces from the public site and README.
- Removed donation/supporter CTA language and reframed engagement around applications, partnerships, and aligned opportunities.
- Verified with `npm run lint`, `npm run build`, `git diff --check`, targeted content grep for prohibited financial/filing/funding phrases, and browser QA at desktop + 390px mobile.

Notes:
- Screenshots saved locally for QA evidence: `/tmp/mkff-desktop-1440.png`, `/tmp/mkff-mobile-390.png`.
- KEC-539 remains separate for launch-readiness/deployment review.

### David Solheim — 2026-07-05T18:35:31.414Z

Start note: working the unblocked `mkff.org` batch on branch `codex/kec-534-mkff-unblocked-issues`.

Scope for this batch: KEC-534 through KEC-538. KEC-539 remains blocked launch-readiness work until these implementation/content tickets are complete.

Acceptance checks planned: remove all public financial/EIN/filing surfacing; add About MKFF history, Why I Created Kectil, and Our Directors content; align Kectil mission/funding positioning; run `npm run lint`, `npm run build`, grep audits for prohibited financial terms, and browser QA at desktop/mobile widths.


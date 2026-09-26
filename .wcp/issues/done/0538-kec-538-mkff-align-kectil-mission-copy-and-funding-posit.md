---
id: "0538"
title: "MKFF: Align Kectil mission copy and funding positioning"
status: done
priority: normal
assignee:
lease_expires:
scope: "Imported from Linear KEC-538. Stay inside that description."
acceptance: "Kectil mission/program copy is accurate and source-grounded."
files: []
commit:
reason:
created: "2026-07-05T18:21:18.555Z"
linear_id: "KEC-538"
linear_url: "https://linear.app/teton-web-ventures/issue/KEC-538/mkff-align-kectil-mission-copy-and-funding-positioning"
linear_status: "Done"
linear_status_type: "completed"
linear_team: "KEC"
linear_project: "mkff.org"
linear_assignee: "David Solheim <david@tetonweb.com>"
linear_labels: ["Improvement"]
linear_priority: "Medium"
linear_parent: ""
linear_cycle: ""
linear_due: ""
linear_updated: "2026-07-05T18:50:41.297Z"
linear_archived: false
notion_page_id: "3e71027c-242b-812c-86e2-ecc59432b10f"
notion_url: "https://app.notion.com/p/3e71027c242b812c86e2ecc59432b10f"
---

## Linear import

- Identifier: KEC-538
- URL: https://linear.app/teton-web-ventures/issue/KEC-538/mkff-align-kectil-mission-copy-and-funding-positioning
- Linear status: Done (completed)
- Queue status: done
- Team: Kectil (KEC)
- Project: mkff.org
- Assignee: David Solheim <david@tetonweb.com>
- Labels: Improvement
- Parent: none
- Priority: Medium
- Estimate: none
- Cycle: none
- Due: none
- Created: 2026-07-05T18:21:18.555Z
- Updated: 2026-07-05T18:50:41.297Z
- Completed: 2026-07-05T18:50:41.275Z
- Canceled: no
- Archived: no
- Branch: david/kec-538-mkff-align-kectil-mission-copy-and-funding-positioning

Queue status follows Water Cooler Protocol. Todo, In Progress, In Review, Triage, and Backlog are `open` so the import does not take a ticket lease or start a review. Done, Canceled, and Blocked use those folders. `linear_status` is the Linear status at import.

## Description

## Goal

Refine MKFF public copy so it uses accurate Kectil mission/program language and avoids inviting individual funding or scholarship requests.

## Sources

* Transcript: `/Users/davidsolheim/Dropbox/David Solheim/Downloads/kectil-alumni-transcript-7-5-26.txt`
* KIPS source: [https://www.kipsllc.com/kectil-website](<https://www.kipsllc.com/kectil-website>)
* Wayback source: [https://web.archive.org/web/20170917123145/http://kectil.com/](<https://web.archive.org/web/20170917123145/http://kectil.com/>)

## Scope

* Use KIPS/current source language for concise Kectil mission, framework, Kectil Code, program description, and eligibility references.
* Keep the site positioned around leadership training, mentorship, network-building, and youth development.
* Audit CTAs and engage cards so they do not encourage personal grant, tuition, or general funding requests.
* Review donation/support language carefully; if retained, it should be stakeholder-approved and framed around supporting programming rather than soliciting individual aid requests.
* Replace AI-placeholder tone with stakeholder-grounded copy.

## Acceptance Criteria

* Kectil mission/program copy is accurate and source-grounded.
* Site does not imply MKFF funds individual college education, personal expenses, or open-ended grant requests.
* CTAs guide visitors toward Kectil, partnerships, or appropriate contact paths.
* Copy avoids placeholder phrasing and reads like a legitimate public foundation site.
* `npm run lint`, `npm run build`, and browser QA pass after implementation.

## Linear comments

### David Solheim — 2026-07-05T18:50:23.327Z

Closeout: implemented in local commit `e437178` on branch `codex/kec-534-mkff-unblocked-issues`.

What changed:
- Aligned Kectil copy with the source positioning: one-year, web-based leadership program for talented 17-26 year-olds from developing and least-developed countries.
- Replaced broad `free`/donation/scholarship-adjacent language with `No participation fee` and leadership/learning/innovation wording.

Verification:
- `npm run lint`
- `npm run build`
- Targeted grep found no remaining prohibited financial/filing/funding request language in `app`, `components`, or `README.md`.
- Browser QA passed at desktop and 390px mobile with no horizontal overflow.

### David Solheim — 2026-07-05T18:35:37.397Z

Start note: included in the unblocked `mkff.org` batch on branch `codex/kec-534-mkff-unblocked-issues`. Copy review will focus on KIPS/current Kectil mission language and avoiding grant/scholarship/personal-funding implications.


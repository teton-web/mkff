---
id: "0536"
title: "MKFF: Add Why I Created Kectil content"
status: done
priority: high
assignee:
lease_expires:
scope: "Imported from Linear KEC-536. Stay inside that description."
acceptance: "About MKFF includes a distinct Why I Created Kectil section/dropdown."
files: []
commit:
reason:
created: "2026-07-05T18:21:10.850Z"
linear_id: "KEC-536"
linear_url: "https://linear.app/teton-web-ventures/issue/KEC-536/mkff-add-why-i-created-kectil-content"
linear_status: "Done"
linear_status_type: "completed"
linear_team: "KEC"
linear_project: "mkff.org"
linear_assignee: "David Solheim <david@tetonweb.com>"
linear_labels: ["Feature"]
linear_priority: "High"
linear_parent: ""
linear_cycle: ""
linear_due: ""
linear_updated: "2026-07-05T18:50:36.472Z"
linear_archived: false
notion_page_id: "3e71027c-242b-81bd-8a6f-f8652353e0c8"
notion_url: "https://app.notion.com/p/3e71027c242b81bd8a6ff8652353e0c8"
---

## Linear import

- Identifier: KEC-536
- URL: https://linear.app/teton-web-ventures/issue/KEC-536/mkff-add-why-i-created-kectil-content
- Linear status: Done (completed)
- Queue status: done
- Team: Kectil (KEC)
- Project: mkff.org
- Assignee: David Solheim <david@tetonweb.com>
- Labels: Feature
- Parent: none
- Priority: High
- Estimate: none
- Cycle: none
- Due: none
- Created: 2026-07-05T18:21:10.850Z
- Updated: 2026-07-05T18:50:36.472Z
- Completed: 2026-07-05T18:50:36.447Z
- Canceled: no
- Archived: no
- Branch: david/kec-536-mkff-add-why-i-created-kectil-content

Queue status follows Water Cooler Protocol. Todo, In Progress, In Review, Triage, and Backlog are `open` so the import does not take a ticket lease or start a review. Done, Canceled, and Blocked use those folders. `linear_status` is the Linear status at import.

## Description

## Goal

Add the stakeholder-requested `Why I Created Kectil` / `Why I Created MKFF` content as part of the `About MKFF` experience.

## Source

* Transcript: `/Users/davidsolheim/Dropbox/David Solheim/Downloads/kectil-alumni-transcript-7-5-26.txt`
* Sherry referenced a second item sent by email during the meeting: the piece explaining why she created MKFF/Kectil, with related images.
* Related source reference: [https://www.kipsllc.com/kectil-website](<https://www.kipsllc.com/kectil-website>) for current Kectil mission/framework language.

## Scope

* Add a second `About MKFF` dropdown/section titled `Why I Created Kectil` or stakeholder-approved equivalent.
* Incorporate Sherry’s supplied content and images once available.
* If the exact email content is not locally available, leave the implementation blocked on obtaining the source material rather than inventing replacement copy.
* Tie the story to MKFF’s public mission: leadership training, mentorship, and network-building for youth from developing and least-developed countries.

## Acceptance Criteria

* `About MKFF` includes a distinct `Why I Created Kectil` section/dropdown.
* Copy is based on stakeholder-supplied source material, not AI placeholder text.
* Any images from the source email are optimized and displayed with meaningful alt text if approved.
* Section does not imply MKFF provides individual grants, tuition, or direct personal funding.
* `npm run lint`, `npm run build`, and browser QA pass after implementation.

## Linear comments

### David Solheim — 2026-07-05T18:50:20.860Z

Closeout: implemented in local commit `e437178` on branch `codex/kec-534-mkff-unblocked-issues`.

What changed:
- Added `Why I Created Kectil` inside the new About MKFF accordion.
- Grounded copy in the follow-up email/KIPS source around `The Project and the Challenge`, avoiding long verbatim quoting.

Verification:
- `npm run lint`
- `npm run build`
- Browser QA opened the accordion and confirmed the source content is present.

### David Solheim — 2026-07-05T18:35:35.077Z

Start note: included in the unblocked `mkff.org` batch on branch `codex/kec-534-mkff-unblocked-issues`. I will use only source-grounded content; if the exact email asset is not locally available, I will avoid inventing copy and keep the section framed from transcript/KIPS/archive evidence.


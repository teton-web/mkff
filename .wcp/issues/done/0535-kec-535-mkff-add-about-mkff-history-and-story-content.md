---
id: "0535"
title: "MKFF: Add About MKFF history and story content"
status: done
priority: high
assignee:
lease_expires:
scope: "Imported from Linear KEC-535. Stay inside that description."
acceptance: "MKFF site has a clear About MKFF entry point."
files: []
commit:
reason:
created: "2026-07-05T18:20:59.135Z"
linear_id: "KEC-535"
linear_url: "https://linear.app/teton-web-ventures/issue/KEC-535/mkff-add-about-mkff-history-and-story-content"
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
linear_updated: "2026-07-05T18:50:34.799Z"
linear_archived: false
notion_page_id: "3e71027c-242b-8174-923a-ecc272d15e4c"
notion_url: "https://app.notion.com/p/3e71027c242b8174923aecc272d15e4c"
---

## Linear import

- Identifier: KEC-535
- URL: https://linear.app/teton-web-ventures/issue/KEC-535/mkff-add-about-mkff-history-and-story-content
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
- Created: 2026-07-05T18:20:59.135Z
- Updated: 2026-07-05T18:50:34.799Z
- Completed: 2026-07-05T18:50:34.777Z
- Canceled: no
- Archived: no
- Branch: david/kec-535-mkff-add-about-mkff-history-and-story-content

Queue status follows Water Cooler Protocol. Todo, In Progress, In Review, Triage, and Backlog are `open` so the import does not take a ticket lease or start a review. Done, Canceled, and Blocked use those folders. `linear_status` is the Linear status at import.

## Description

## Goal

Add an `About MKFF` content experience that restores the MKFF history/story material Sherry identified as missing.

## Sources

* Transcript: `/Users/davidsolheim/Dropbox/David Solheim/Downloads/kectil-alumni-transcript-7-5-26.txt`
* Wayback archive root: [https://web.archive.org/web/20170917123145/http://kectil.com/](<https://web.archive.org/web/20170917123145/http://kectil.com/>)
* Archived `About MKFF` page identified during analysis: `http://kectil.com/about/mkff/about/` in 2017 captures.

## Scope

* Create an `About MKFF` section/page/navigation pattern with a `History of MKFF` dropdown/section.
* Use the recovered legacy `About MKFF` story as source material, including the Malmar/Knowles family origin story.
* Preserve the heart of the story while modernizing layout, scanning length, and copy treatment for the new MKFF site.
* Remove old archive cruft: contact forms, old application dates, old nav labels, CAPTCHAs, outdated program deadlines, and unrelated footer widgets.
* Include historical/family imagery only where assets are available and approved.

## Acceptance Criteria

* MKFF site has a clear `About MKFF` entry point.
* The history/story content explains what MKFF is, why it exists, and the family background behind the foundation.
* Content is readable on desktop and mobile, with no giant unbroken text wall.
* No outdated 2017 application dates, old forms, or archive-only UI appear on the new site.
* `npm run lint`, `npm run build`, and browser QA at desktop/mobile widths pass after implementation.

## Linear comments

### David Solheim — 2026-07-05T18:50:19.776Z

Closeout: implemented in local commit `e437178` on branch `codex/kec-534-mkff-unblocked-issues`.

What changed:
- Added a new `About MKFF` section near the top of the page.
- Restored source-grounded MKFF history/story content from the stakeholder transcript and archived Kectil/MKFF material.
- Added `About MKFF` to nav/footer paths.

Verification:
- `npm run lint`
- `npm run build`
- Browser QA confirmed the About MKFF section renders past the gate on desktop and 390px mobile with no horizontal overflow.

### David Solheim — 2026-07-05T18:35:33.756Z

Start note: included in the unblocked `mkff.org` batch on branch `codex/kec-534-mkff-unblocked-issues`. See KEC-534 for the shared execution note and acceptance checks.


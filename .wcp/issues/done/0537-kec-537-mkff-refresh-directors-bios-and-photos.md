---
id: "0537"
title: "MKFF: Refresh directors bios and photos"
status: done
priority: high
assignee:
lease_expires:
scope: "Imported from Linear KEC-537. Stay inside that description."
acceptance: "All three directors appear with approved current names, roles, bios, and images."
files: []
commit:
reason:
created: "2026-07-05T18:21:12.967Z"
linear_id: "KEC-537"
linear_url: "https://linear.app/teton-web-ventures/issue/KEC-537/mkff-refresh-directors-bios-and-photos"
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
linear_updated: "2026-07-05T18:50:37.926Z"
linear_archived: false
notion_page_id: "3e71027c-242b-8147-ada9-edbd55d64e88"
notion_url: "https://app.notion.com/p/3e71027c242b8147ada9edbd55d64e88"
---

## Linear import

- Identifier: KEC-537
- URL: https://linear.app/teton-web-ventures/issue/KEC-537/mkff-refresh-directors-bios-and-photos
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
- Created: 2026-07-05T18:21:12.967Z
- Updated: 2026-07-05T18:50:37.926Z
- Completed: 2026-07-05T18:50:37.906Z
- Canceled: no
- Archived: no
- Branch: david/kec-537-mkff-refresh-directors-bios-and-photos

Queue status follows Water Cooler Protocol. Todo, In Progress, In Review, Triage, and Backlog are `open` so the import does not take a ticket lease or start a review. Done, Canceled, and Blocked use those folders. `linear_status` is the Linear status at import.

## Description

## Goal

Replace placeholder/outdated director content with current director bios and approved photos for Sherry, Brooke, and Chris.

## Source

* Transcript: `/Users/davidsolheim/Dropbox/David Solheim/Downloads/kectil-alumni-transcript-7-5-26.txt`
* Wayback archive director source: `http://kectil.com/about/mkff/directors/` and individual archived director pages where available.
* Sherry said she will update her bio and provide Brooke/Chris bios; Chris’s old bio is specifically outdated because he is now a doctor.

## Scope

* Add an `Our Directors` dropdown/section under `About MKFF`.
* Include Sherry, Brooke, and Chris as the three MKFF directors.
* Use archived bios only as starting reference; request/insert updated bios and photos before launch.
* Allow fuller Sherry CV-style content including legal background, awards, publications, and Kectil/MKFF leadership.
* Replace any financial card currently sitting in the board/director grid.

## Acceptance Criteria

* All three directors appear with approved current names, roles, bios, and images.
* Chris’s content no longer reflects an outdated pre-doctor status.
* Sherry’s content can support a longer biography without breaking layout.
* Director photos render cleanly on desktop and mobile and include meaningful alt text.
* No `Financials` pseudo-director/card remains in the leadership area.
* `npm run lint`, `npm run build`, and browser QA pass after implementation.

## Linear comments

### David Solheim — 2026-07-05T18:50:22.296Z

Closeout: implemented in local commit `e437178` on branch `codex/kec-534-mkff-unblocked-issues`.

What changed:
- Refreshed director content for Sherry M. Knowles, Brooke M. Shafer, and Dr. Christopher Zalesky.
- Added director cards/photos to the About MKFF accordion and updated the Leadership section to remove the financial-filings placeholder.

Verification:
- `npm run lint`
- `npm run build`
- Browser QA confirmed all three director names render and screenshots were saved to `/tmp/mkff-desktop-1440.png` and `/tmp/mkff-mobile-390.png`.

### David Solheim — 2026-07-05T18:35:36.282Z

Start note: included in the unblocked `mkff.org` batch on branch `codex/kec-534-mkff-unblocked-issues`. Director content will use approved local images already in the repo and source-grounded bios, with Chris updated away from the outdated pre-doctor framing.


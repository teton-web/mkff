---
id: "0238"
title: "Align mkff.org repo with Paper landing design"
status: done
priority: normal
assignee:
lease_expires:
scope: "Imported from Linear KEC-238. Stay inside that description."
acceptance: "Implement the mkff.org Paper landing design in the mkff Next.js repo."
files: []
commit:
reason:
created: "2026-06-06T20:15:50.816Z"
linear_id: "KEC-238"
linear_url: "https://linear.app/teton-web-ventures/issue/KEC-238/align-mkfforg-repo-with-paper-landing-design"
linear_status: "Done"
linear_status_type: "completed"
linear_team: "KEC"
linear_project: "mkff.org"
linear_assignee: "David Solheim <david@tetonweb.com>"
linear_labels: []
linear_priority: "Medium"
linear_parent: ""
linear_cycle: ""
linear_due: ""
linear_updated: "2026-08-26T13:38:30.725Z"
linear_archived: false
notion_page_id: "3e71027c-242b-815f-bfd3-ce43c6dab7c0"
notion_url: "https://app.notion.com/p/3e71027c242b815fbfd3ce43c6dab7c0"
---

## Linear import

- Identifier: KEC-238
- URL: https://linear.app/teton-web-ventures/issue/KEC-238/align-mkfforg-repo-with-paper-landing-design
- Linear status: Done (completed)
- Queue status: done
- Team: Kectil (KEC)
- Project: mkff.org
- Assignee: David Solheim <david@tetonweb.com>
- Labels: none
- Parent: none
- Priority: Medium
- Estimate: none
- Cycle: none
- Due: none
- Created: 2026-06-06T20:15:50.816Z
- Updated: 2026-08-26T13:38:30.725Z
- Completed: 2026-06-06T20:31:30.303Z
- Canceled: no
- Archived: no
- Branch: david/kec-238-align-mkfforg-repo-with-paper-landing-design

Queue status follows Water Cooler Protocol. Todo, In Progress, In Review, Triage, and Backlog are `open` so the import does not take a ticket lease or start a review. Done, Canceled, and Blocked use those folders. `linear_status` is the Linear status at import.

## Description

Implement the [mkff.org](<http://mkff.org>) Paper landing design in the `mkff` Next.js repo.

Design source: [https://app.paper.design/file/01KTF0GD9B50TCREDPJENH8Y78/1-0/1-0](<https://app.paper.design/file/01KTF0GD9B50TCREDPJENH8Y78/1-0/1-0>)

Acceptance checks:

* Repo reads README/instructions and preserves current working tree boundaries.
* One-page MKFF landing page matches the Paper direction: cream editorial base, oxblood accents, compact nav, large type-driven hero, dark stats band, table-style Kectil pillars, founder/leadership block, three engage cards, and deep footer.
* Responsive desktop/mobile layout has no overlapping or clipped text.
* `npm run lint` and `npm run build` pass.
* Browser QA covers desktop and mobile viewports.

Release mode: local implementation and local commit only unless explicitly asked to push.

## Linear comments

### David Solheim — 2026-06-06T20:34:47.653Z

Published to `origin/main`.

Push details:
- Pre-push divergence: `origin/main...main` was `0 1`.
- Pushed commit: `cc45e3f` (`KEC-238 align landing page with Paper design`).
- Remote update: `f390e79..cc45e3f main -> main`.

Local verification before push remained green: `npm run lint`, `npm run build`, and desktop/mobile browser QA.

### David Solheim — 2026-06-06T20:34:22.663Z

Release requested: pushing the verified local `main` commit to `origin/main`.

Pre-push guardrails:
- Local tree was clean at `cc45e3f`.
- Fetching `origin/main` and checking divergence before push.
- Will push only if the local tree is the expected Paper implementation commit.

### David Solheim — 2026-06-06T20:31:24.441Z

Implemented and locally committed the Paper alignment.

Summary:
- Rebuilt the one-page landing flow around the Paper design: cream editorial base, oxblood hero, dark stats band, table-style Kectil program rows, founder/leadership section, engage cards, and deep maroon footer.
- Swapped the site font system to Inter, Schibsted Grotesk, and Fraunces via `next/font`.
- Removed stale pre-Paper form/story/stat components and their unused dependencies.
- Updated README and `.env.example` so repo docs match the new no-form Paper design.

Verification:
- `npm run lint` passed.
- `npm run build` passed.
- Browser QA on `http://localhost:3000` at 1440px desktop and 390px mobile passed.
- Desktop and mobile overflow diagnostics reported no horizontal overflow and no detected text overflow.
- Console/network checks on mobile showed no console warnings/errors and primary assets loaded successfully.

Local commit: `cc45e3f` (`KEC-238 align landing page with Paper design`)

Release status: local commit only; not pushed.

### David Solheim — 2026-06-06T20:16:04.327Z

Started implementation.

Plan:
- Translate the Paper landing design into the existing Next/Tailwind component structure.
- Preserve MKFF/Kectil content intent while matching the visual direction: cream editorial base, oxblood accents, compact nav, dark stats band, table-style program rows, founder/leadership block, engage cards, and footer.
- Verify with lint/build plus browser QA at desktop and mobile viewports.

Target branch/release mode: local `main` implementation and local commit only. No push unless requested.


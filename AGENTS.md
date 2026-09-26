# AGENTS.md

## Work queue

The issue queue is Water Cooler Protocol under `.wcp/issues/`. Read the `water-cooler-protocol` skill before claiming a ticket. Claim, solve, and close work by editing those files. File no new Linear issues.

The human board is the MKFF issues Notion database in the Teton Web workspace (user-level `notion` MCP):
https://app.notion.com/p/61ea5227514241969303e2c2787bb337

Data source `264c0b62-6cbe-464d-a84c-004d22a9b8ef`.

Each issue file keeps `linear_id`, `linear_url`, `linear_status`, `notion_page_id`, and `notion_url` in frontmatter. File `status` is the queue status. When a new issue file is added, create its Notion row and write `notion_page_id` and `notion_url` back into that file.

`KEC-N` is WCP id `NNNN` (zero-padded to 4 digits). Active Linear statuses (Triage, Backlog, Todo, In Progress, In Review) are queue status `open`. Done, Canceled, and Blocked use those folders. The import takes no ticket lease and starts no review.

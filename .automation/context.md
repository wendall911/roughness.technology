# roughness.technology — Project Context

## What This Is
Business website for Roughness Technology, LLC (consulting). Hosted statically at roughness.technology.

## Tech Stack
- Svelte + TypeScript
- Tailwind CSS
- pnpm

## Repository Relationships
- This repo (`roughness.technology`) is the source repository — all edits happen here
- Deployment output goes to the separate `wendall911.github.io` repo via GitHub Actions
- DNS is managed via Digital Ocean; the static host is GitHub Pages

## Branch Convention
- `main` is the only active development branch
- Releases are marked with tags; there are no version branches

## Session Start Workflow

Before beginning any work:

1. `git status` — verify the local repository is clean and confirm the current branch
2. `git pull` — pull remote changes; fast-forwards if no local commits diverge
3. If git warns that it cannot automatically rebase, run `git rebase` directly

External PR contributions are possible. Always pull before starting work. This workflow applies to this source repo only — do not run additional git commands in the `wendall911.github.io` deployment repo.

## Deployment Model
- GitHub Actions deploys static output to `wendall911.github.io` on push
- `pnpm run deploy:verify` must pass before any release
- Deployment is incomplete until both the release commit and its tag are pushed
- `README.md` contains pre-publishing notes and deployment instructions — read it before any release action and follow the steps exactly and in order; no substitutions

## wendall911.github.io
- This is the static deployment output repository — do not edit it directly
- It is intentionally stale locally; `git pull` is the only command needed to refresh it
- Do not run additional git commands (status, fetch, log, etc.) in this repo unless explicitly asked
- All content changes flow through GitHub Actions from this source repo

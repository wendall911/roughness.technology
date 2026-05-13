# roughness.technology

roughness.technology Website
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Github CI](https://github.com/wendall911/roughness.technology/actions/workflows/deploy.yml/badge.svg)](https://github.com/wendall911/roughness.technology/actions/workflows/deploy.yml)

## Dev Notes
1. pnpm run build # Builds site in ../website
1. pnpm run dev # Runs local dev server
1. Keep shared utilities in src/lib as TypeScript only (do not add parallel .js duplicates)

## Pre-publishing
1. pnpm run preflight:release # install/audit/outdated/check/lint/test/build

## Deployment Notes
1. pnpm install # Update packages and generate/update pnpm-lock.yaml
1. pnpm install --frozen-lockfile # Verify reproducible CI install
1. CI enforces pnpm-lock.yaml with frozen lockfile installs; keep the lockfile current with dependency changes
1. Commit pnpm-lock.yaml with dependency changes
1. Update version in package.json
1. Commit changes with "Release X.X.X"
1. Tag release with git tag vX.X.X
1. pnpm run deploy:verify # Requires clean tree, Release X.X.X commit on HEAD, and matching vX.X.X tag on HEAD
1. pnpm run deploy:release # Runs preflight + verify, then pushes commit and tags

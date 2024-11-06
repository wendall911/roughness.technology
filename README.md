# roughness.technology

roughness.technology Website
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Github CI](https://github.com/wendall911/roughness.technology/actions/workflows/deploy.yml/badge.svg)](https://github.com/wendall911/roughness.technology/actions/workflows/deploy.yml)

## Dev Notes
1. $ npm run build # Builds site in ../website
1. $ npm run dev # runs dev instance for dev work on site

## Deployment Notes
1. $ npm install # update packages
1. $ npm ci # test ci install
  1. If this fails, delete package-lock.json and npm install again.
1. Update version in package.json
1. Commit changes with "Release X.X.X"
1. Tag release with git tag vX.X.X
1. git push && git push --tags # Will kick off CI from GitHub Actions

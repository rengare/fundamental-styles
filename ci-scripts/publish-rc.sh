#! /bin/bash

# npx standard-version --prerelease rc --no-verify

npx node ci-scripts/bump_package.js

cat package.json | grep version

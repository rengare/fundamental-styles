#! /bin/bash

set -e

std_ver=$(npm run std-version -- --prerelease rc --no-verify)
release_tag=$(echo "$std_ver" | grep "tagging release" | awk '{print $4}')

echo "$release_tag"
# npx node ci-scripts/bump_package.js $release_tag

cat package.json | grep version

git status

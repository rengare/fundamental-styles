#! /bin/bash

std_ver=$(npm run std-version -- --prerelease rc --no-verify)
release_tag=$(echo "$std_ver" | grep "tagging release" | awk '{print $4}')

npx node ci-scripts/bump_package.js $release_tag

cat package.json | grep version

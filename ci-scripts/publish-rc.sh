#! /bin/bash
git status

npx standard-version --prerelease rc --no-verify

npx node ci-scripts/bump_package.js

git status

cat package.json | grep version

git push --follow-tags origin master


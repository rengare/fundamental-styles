#! /bin/bash
git status

npx standard-version --prerelease rc --no-verify

git status

cat package.json | grep version

git push --follow-tags origin master


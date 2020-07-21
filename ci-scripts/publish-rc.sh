#! /bin/bash

set -e
git status
npx standard-version --prerelease rc --no-verify
#npm run std-version -- --prerelease rc --no-verify --debug

git status

cat package.json | grep version
#build dist and component folders

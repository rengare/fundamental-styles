#! /bin/bash

set -e
cat package.json
git status
npx standard-version --release-as prerelease rc --no-verify
#npm run std-version -- --prerelease rc --no-verify --debug

git status

cat package.json
#build dist and component folders

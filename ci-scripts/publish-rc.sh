#! /bin/bash

set -e
cat package.json
git status

npm run std-version -- --prerelease rc --no-verify --debug

git status

cat package.json
#build dist and component folders

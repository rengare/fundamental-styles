#! /bin/bash

set -e

git status

npm run std-version -- --prerelease rc --no-verify --debug

git status
git push --follow-tags origin master
#build dist and component folders
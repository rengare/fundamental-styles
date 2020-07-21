#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

git status

npm run std-version -- --prerelease rc --no-verify --debug

git status
git push --follow-tags origin master
#build dist and component folders
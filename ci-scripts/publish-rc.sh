#! /bin/bash

set -e



# std_ver=$(npx standard-version --prerelease rc --no-verify -m \"chore(release): version %s build ${TRAVIS_BUILD_NUMBER} [ci skip]\" )
std_ver=$(npx standard-version --prerelease rc --no-verify -m "chore(release): version %s build ${TRAVIS_BUILD_NUMBER} [ci skip]" )
release_tag=$(echo "$std_ver" | grep "tagging release" | awk '{print $4}')

echo "$release_tag"
# npx node ci-scripts/bump_package.js $release_tag

cat package.json | grep version
cat .gitignore 
git status

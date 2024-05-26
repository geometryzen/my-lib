#!/bin/sh
npm install
npm update
npm run lint
npm run build
npm run test
git status
git add --all
echo "Please enter a commit message"
read message
git commit -m "'$message'"
git push origin main
npm run release
npm run docs
npm run pages

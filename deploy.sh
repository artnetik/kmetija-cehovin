set -e
# npm install
npm run generate
cd dist
echo 'kmetija-cehovin.si' > CNAME
git init
git add -A
git commit -m "Deploy website"
git push -f git@github.com:artnetik/kmetija-cehovin.git master:gh-pages
cd -
echo ''
echo '--------------------------------------------------------'
echo '  Deployment complete. Check: https://www.kmetija-cehovin.si  '
echo '--------------------------------------------------------'
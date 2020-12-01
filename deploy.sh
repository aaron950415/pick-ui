rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:aaron950415/pick-ui-website.git &&
git push -f -u origin main &&
cd - &&
echo https://aaron950415.github.io/pick-ui-website/#/
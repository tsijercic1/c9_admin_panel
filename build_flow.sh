npm run build --development
rm -rf .dist/*
cp -r dist/* .dist/
cd .dist || exit
git add --all
stamp=$(date "+%H:%M %d.%m.%Y")
git commit -m "Build ${stamp}"
git push

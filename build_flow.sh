npm run build --development
cd .dist || exit
rm -rf `ls | grep -v assets`
cd assets || exit
rm -rf `ls | grep -v autotestGenerator`
cd ../..
cp -r dist/. .dist/
cd .dist || exit
git add --all
stamp=$(date "+%H:%M %d.%m.%Y")
git commit -m "Build ${stamp}"
git push

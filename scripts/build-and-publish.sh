# move to project directory (assuming the script was called from within the script folder)
cd ..

# build
npm run generate

# publish 'dist' directory to gh-pages branch
git subtree push --prefix dist origin gh-pages

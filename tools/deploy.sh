# create git commit of content changes
git add content/
git commit -m"Content updates"

# push, this should trigger GH action to generate static website
git push origin master

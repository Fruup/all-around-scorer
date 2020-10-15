# cd
cd ..

# colors
RED="\033[0;31m"
GREEN="\033[0;32m"
NC="\033[0m" # no color

# prompt
read -p "Make sure to preview your site first (preview.sh)! Build and deploy website now? (y/n): " CONTINUE

case $CONTINUE in
    "y"|"ye"|"yes"|"yea")

        # commit changes to master branch
        git add content assets/img
        git commit -m"content update"
        git push origin master

        # create worktree to track gh-pages branch
        #git worktree add --track dist gh-pages
        git worktree remove dist
        git worktree add dist gh-pages

        # copy .git marker file (because it will be deleted by nuxt generate)
        GIT_TMP="~.git.tmp"
        cp dist/.git $GIT_TMP

        # generate
        if nuxt generate --fail-on-error
        then
            # restore .git worktree marker
            mv $GIT_TMP dist/.git

            # go to dist directory
            cd dist

            # stage and push dist folder to gh-pages branch
            git add .
            git commit -m"content update"

            if git push origin gh-pages
            then
                printf "\n\n\n"
                printf "${GREEN}[INFO]${NC} The changes to the website are live shortly!\n"
            else
                printf "\n\n\n"
                printf "${RED}[ERROR]${NC} Failed to push website to git repository!\n"
            fi
        else
            printf "\n\n\n"
            printf "${RED}[ERROR]${NC} Failed to generate website!\n"
        fi
        ;;
    *)
        printf "\n\n\n"
        printf "Ok dann nit.\n"
        ;;
esac

# -s: do not echo input
# -p: prompt message
# -n: return after reading n characters
read -s -n 1 -p "Press any key to continue..."

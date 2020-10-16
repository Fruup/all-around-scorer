# prompt
read -p "Commit message: " COMMIT_MSG

# colors
RED="\033[0;31m"
GREEN="\033[0;32m"
NC="\033[0m" # no color

# create (new) worktree to track gh-pages branch
git worktree remove dist
git worktree add dist gh-pages --no-checkout # do not checkout branch, folder will be deleted anyway

# copy .git marker file (because it will be deleted by nuxt generate)
GIT_TMP="~.git.tmp"
cp dist/.git $GIT_TMP

# generate
if npm run generate --fail-on-error
then
    # restore .git worktree marker
    mv $GIT_TMP dist/.git

    # go to dist directory
    cd dist

    # stage and push dist folder to gh-pages branch
    git add .

    case $COMMIT_MSG in
        "")
            # no commit message
            git commit -m"dev deploy"
            ;;
        *)
            # with commit message
            git commit -m"dev deploy: ${COMMIT_MSG}"
            ;;
    esac

    if git push origin gh-pages
    then
        printf "\n\n\n"
        printf "${GREEN}[INFO]${NC}: Everything worked! The changes to the website are live shortly!\n"
    else
        printf "\n\n\n"
        printf "${RED}[ERROR]${NC}: Oh no.. Failed to push website to git repository!\n"
    fi
else
    printf "\n\n\n"
    printf "${RED}[ERROR]${NC}: Failed to generate website!\n"
fi

# -s: do not echo input
# -p: prompt message
# -n: return after reading n characters
read -s -n 1 -p "Press any key to continue..."

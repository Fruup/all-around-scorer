# move to project directory (assuming the script was called from within the script folder)
cd ..

# colors
RED="\033[0;31m"
GREEN="\033[0;32m"
NC="\033[0m" # no color

# some info
printf "${GREEN}[INFO]${NC}: ${RED}IMPORTANT${NC}!! Press Ctrl+C to terminate the program when you're done!\n\n\n"
printf "${GREEN}[INFO]${NC}: This can take a minute..."
sleep 3

# pull changes
git pull

# install npm packets
npm i

# launch website in default browser
explorer "http://localhost:3000/"

# start local dev server
npm run dev

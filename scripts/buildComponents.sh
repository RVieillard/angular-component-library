#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color

# Remove previous build
rm -rf ./dist

yarn
cd ./components
yarn
yarn build
cd ..

echo -e "${BLUE}Copying Package Resources${NC}"
# Do not copy over the package.json, we need to keep the generated package.json made with the ng build command.
cp -r README.md ./dist/README.md
cp -r LICENSE ./dist/LICENSE
cp -r CHANGELOG.md ./dist/CHANGELOG.md
cp -r components/LICENSES.json ./dist/LICENSES.json

echo -e "${GRAY}Complete${NC}\r\n"

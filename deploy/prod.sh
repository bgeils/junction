#!/bin/bash
# Example: sh prod.sh --full "commit msg"
if [ "$1" == "--full" ]; then
        echo Running full build...
        cd <YOUR DIRECTORY>
        npm run buildproduction
        git add -A
        git commit -m "$2"
        git push
        cd ..
        npm run production 
        echo Done pushing to production
    fi

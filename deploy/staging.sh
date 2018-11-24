#!/bin/bash
# Example: sh staging.sh --full "commit msg"
if [ "$1" == "--full" ]; then
        echo Running full build...
        cd <YOUR DIRECTORY>
        npm run buildstaging 
        git add -A
        git commit -m "$2"
        cd ..
        npm run staging 
        echo Done pushing to staging
    fi

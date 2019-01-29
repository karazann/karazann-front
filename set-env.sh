#!/bin/bash
if [ $CIRCLE_BRANCH = 'master' ]; then
    echo 'Production build.'
    export NODE_ENV='production'
else
    echo 'Development build.'
    export NODE_ENV='development'
fi
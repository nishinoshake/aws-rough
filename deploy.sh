#!/bin/sh

export $(cat .env | xargs)

npm run test

if [ $? -gt 0 ] ;then
  echo "**** oops... ****"
  exit 1
fi

npm run generate --spa

aws s3 sync ./dist/ s3://aws.noplan.cc --exact-timestamps --delete --exclude "*" --include "*.html" --cache-control no-store
aws s3 sync ./dist/ s3://aws.noplan.cc --exact-timestamps --delete --exclude "*" --include "*.js" --cache-control max-age=31536000
aws cloudfront create-invalidation --distribution-id $CF_DIST_ID --paths "/*"
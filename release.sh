#!/usr/bin/env bash

cd vue && npm run build && cd -
./tool/s3_sync.sh
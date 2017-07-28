#!/bin/bash

#s3cmd --exclude=".git/*" sync --recursive --cf-invalidate --cf-invalidate-default-index --default-mime-type="text/html" --guess-mime-type ~/amberstones.net/yellowButton/web/* s3://yellow-button-web

TOP="/Users/daesubkim/Desktop/WhatsIt/whatsit-web"
s3cmd sync --exclude=".git/*" --exclude="node_modules/*" --recursive --default-mime-type="text/html" --guess-mime-type $TOP/vue/dist/* s3://app.whatsit.net -c ~/.s3cfg

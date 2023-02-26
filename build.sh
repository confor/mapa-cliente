#!/usr/bin/bash
set -eu
mkdir -p dist
cp src/index.html dist/index.html
esbuild src/script.js --outfile=dist/build.js --bundle --minify --target=chrome62,edge16,safari11,firefox56

mkdir -p dist
cp src/index.html dist/index.html
esbuild src/index.js --outfile=dist/index.js --bundle --minify --target=chrome,firefox,safari,edge

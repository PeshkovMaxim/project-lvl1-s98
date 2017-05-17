install:
	 npm install

start:
	npm run babel-node -- src/bin/baranin-games.js

publish:
	npm publish

.PHONY: test

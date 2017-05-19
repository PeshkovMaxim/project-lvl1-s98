install:
	 npm install

start:
	npm run babel-node -- src/bin/baranin-games.js

publish:
	npm publish

lint:
	npm run eslint -- src

starteven:
	npm run babel-node -- src/bin/brain-even.js

startcalc:
	npm run babel-node -- src/bin/brain-calc.js

.PHONY: test

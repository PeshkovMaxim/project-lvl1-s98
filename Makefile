install:
	 npm install

start:
	npm run babel-node -- src/bin/baranin-games.js

startbal:
	npm run babel-node -- src/bin/brain-balance.js

startprime:
	npm run babel-node -- src/bin/brain-prime.js


startprog:
	npm run babel-node -- src/bin/brain-progression.js


startgcd:
	npm run babel-node -- src/bin/brain-gcd.js

publish:
	npm publish

lint:
	npm run eslint -- src

starteven:
	npm run babel-node -- src/bin/brain-even.js

startcalc:
	npm run babel-node -- src/bin/brain-calc.js

.PHONY: test

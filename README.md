A node.js demo with love
==
a simple node.js server passing tweets from Twitter Streaming API via socket.io to a webbrowser

Pre-Requisites
==

Install node.js
http://nodejs.org/

Install npm, nodejs package manager
http://npmjs.org/


Installation
==

	git clone https://github.com/rockitbaby/love-node.git
	cd love-node

Then use npm to automatically install dependencies

	npm install

manual:

	npm install socket.io

https://github.com/LearnBoost/Socket.IO-node

	npm install twitter-node

https://github.com/technoweenie/twitter-node


Configuration
==

The directory structure should be

- love-node
-- logs
-- node_modules

open index.js and add your

```js
, TWITTER_USERNAME = 'rockitbaby'
, TWITTER_PASSWORD = '...'
, TWITTER_HASHTAG = 'love'
```

you may also want to change the TWITTER_HASHTAG you want to observe

Then

	run app/server.sh start

and open a webbrowser http://localhost:7777

Tested
==

- Chrome 12.++
- Firefox 4.0.1
- Safari 5.0.5

(all on OS X 10.6)

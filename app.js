var http = require('http')
  , url = require('url')
  , fs = require('fs')
  , io = require('socket.io')
  , TwitterNode = require('twitter-node').TwitterNode
  , TWITTER_USERNAME = 'rockitbaby'
  , TWITTER_PASSWORD = '...'
  , TWITTER_HASHTAG = 'love'
  , server;
  
server = http.createServer(function(req, res) {
  var uri = url.parse(req.url).pathname;
  switch (uri) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(fs.readFileSync(__dirname + uri + 'index.html', 'utf8'), 'utf8');
      res.end();
      break;
    // redirect to socket.io installed with npm in node_modules directory
    case '/client/socket.io.js':
      uri = '/node_modules/socket.io/support/socket.io-client/socket.io.js';
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.write(fs.readFileSync(__dirname + uri, 'utf8'), 'utf8');
      res.end();
      break;
    default:
      res.writeHead(404);
      res.write('Error 404');
      res.end();
      break;
    }
});

server.listen(7777);
var socket = io.listen(server);

var twitterStream = new TwitterNode({
      user: TWITTER_USERNAME
    , password: TWITTER_PASSWORD
    , track: [TWITTER_HASHTAG]
  }).addListener('tweet', function (tweet) {
    // #rp11:
    //Neuer User? Verwerte Farbinformation und speichere den Benutzer
    // Aktualisiere den Punktestand des Users
    // Reichere den Tweet mit gespeicherten User-Informaionen an
    // Analysiere die Worte für Trending Topics
    socket.broadcast({tweet: tweet});
  }).stream();
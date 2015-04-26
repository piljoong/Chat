var app = require('express')();
var http = require('http').Server(app);	// Create a http server object
var io = require('socket.io')(http);	// Creates socket.io object
var redis = require('redis');		// Creates a redis object
var client = redis.createClient(); 	//creates a new redis client

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html'); 	// On request from browser send index.html
});

io.on('connection', function(socket){		// Event handler for each user connect
  console.log('a user connected');
  client.lrange('chats', 0, -1, function(err, reply) {	// Push all the previously recorded messages from redis into browser
      io.emit('history',reply)
  });
  socket.on('chat message', function(msg){	// event handler to receive messages from client
    client.rpush(['chats',msg], function(err, reply) {	// Push these messages into redis
        console.log(reply); //prints 2
    });
    io.emit('chat message', msg);		// broadcast the received messages to all the clients connected
  });
  socket.on('disconnect', function(){		// event handler to handle user logging out
    console.log('user disconnected');
  });
});

http.listen(3000, function(){			// Starting http server on port 3000
  console.log('listening on *:3000');
});

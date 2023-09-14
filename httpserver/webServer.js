const http = require('http');

var server = http.createServer(function (req, res) {   // 2 - creating server
    //handle incomming requests here..
    req.end('hello this is new space for playing');

});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to the port 8000');
});
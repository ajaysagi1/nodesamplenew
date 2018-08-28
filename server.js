var http = require('http');
//loads http module after edit
var app=http.createServer(function (req, res) {
//creates server after edit 2
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //sets the right header and status code after edit 3
  res.end('Hello World\n');
  //outputs string with line end symbol after edit 4
}).listen(1337, "127.0.0.1");
//sets port and IP address of the server after edit 5
console.log('Server running at http://127.0.0.1:1337/');

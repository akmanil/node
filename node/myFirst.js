var http =require('http');
// import myDateTime from './myFirstModule.js';
var dt = require('./myFirstModule');

http.createServer((req,res) =>{
    res.write('Hello World' +"  " + dt.myDateTime());
    res.end('Hello World');
}).listen(8080);



// var http = require('http');

// var server =http.createServer(function(req ,res) {
//     res.writeHead(200,{"content-type ":"text/html"});
//     res.end("<h1>Hello World</h1>");
// })

// server.listen(8080);

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
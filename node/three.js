//file Server

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((req , res) =>{
  var q = url.parse(req.url ,true); 
  var fileName = "." +q.pathname;

  fs.readFile(fileName ,(err ,data)=>{
    if(err){
        res.writeHead(404 ,{"content-type" : "text/html"});
        res.end("404 Not found");
    }
    else{
        res.writeHead(200 , {"content-type" : "text/html"});
        res.write(data);
        res.end();
    }
  })

}).listen(8080);

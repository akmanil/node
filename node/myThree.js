var http = require('http');
var fs =require('fs');

http.createServer((req,res)=>{
    fs.readFile('file.html' , (err,data)=>{
        if(err){
            res.writeHead(404 ,{'content-type' :"text/html"});
            res.end(err.message);
        }
        res.writeHead(200 , {'content-type' :'text/html' });
        res.write(data);
        res.end();
    })
}).listen(8080);
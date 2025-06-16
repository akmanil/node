var http =  require("http");
var url = require('url');

http.createServer((req,res)=>{
    res.writeHead(200 , {'content-type' : 'text/html'});
    res.write("<h1>Hello World</h1>");
    // res.write(req.url);
    var q = url.parse(req.url ,true).query;
    const currentDate = new Date();
    var txt = q.year || currentDate.getFullYear() + " " + q.month || currentDate.toLocaleString('default', { month: 'long' })+" " +q.day || currentDate.getDate(); // it gives undefined undefined and undefined
    res.write("<p>URL: " + req.url + "</p>");
    res.write("<p>Query parameters: " + txt + "</p>");
    res.end();
}).listen(8080)
var url = require("url");

var link = 'http://localhost:8080/default.htm?year=2025&month=jun';

var parseUrl = url.parse(link ,true);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.search);

var q = parseUrl.query;
console.log(q.month);
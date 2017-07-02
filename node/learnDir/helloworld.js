const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200,{'content-Tpey':'text/plain'});
  res.write('hello world tom \n');
  res.write('very good');
  res.end();
}).listen(3000)

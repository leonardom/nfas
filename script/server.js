// Exempo simples apenas para verificação
var nodePort = process.env.NODE_PORT || 8080;
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Bemvindo ao NFAS!\n\nApp='+process.env.USER+', port='+nodePort);
}).listen(nodePort);
console.log('Server running at port:'+nodePort);

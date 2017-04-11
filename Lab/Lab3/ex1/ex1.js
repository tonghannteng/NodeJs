var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
    var rs = fs.createReadStream(path.join(__dirname, './GoogleLogo.png')).pipe(res);
}).listen(8080, '127.0.0.1');
var express = require('express'),
    http = require('http'),
    ip = require('ip');
   

var app = express();
app.get('/', function(req, res, next) { 
    res.send('<h1>Hello from ip:  : ' + ip.address() + </H1>');

});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});

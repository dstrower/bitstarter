var express = require('express');
var fs require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', 
     function (err, data) {
       if (err) throw err;
       var outString = data.toString("utf-8", 0,data.length);
       response.send(outString);
      });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

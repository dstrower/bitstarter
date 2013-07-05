var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var outString = "";
getFile();

function getFile() {
     var myString = "";
     fs.readFile('index.html', 
     function (err, data) {
       if (err) throw err;
       outString = data.toString("utf-8", 0,data.length);
       console.log("Outstring = " + outString);
       startListener(outString);
      });
}
function startListener(myString) {
   app.get('/', function(request, response) {
     response.send(myString);
   });

   var port = process.env.PORT || 5000;
   app.listen(port, function() {
     console.log("Listening on " + port);
   });

}


var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(+_dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);
});

var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.render("home");
});
app.get("/aboutus", function(req, res){
  res.render("aboutus"); 
});
app.get("/services", function(req, res){
  res.render("services"); 
});
app.get("/contactus", function(req, res){
  res.render("contactus"); 
});
app.get("/bye", function(req, res){
  res.render("bye"); 
});

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

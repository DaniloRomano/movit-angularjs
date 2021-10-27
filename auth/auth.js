const http = require("http");
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query; 
  res.redirect("http://localhost:3000/public/#/login?code=" + query.code);
});

const server = http.createServer(app);
server.listen(8080);

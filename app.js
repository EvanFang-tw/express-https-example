const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

var key = fs.readFileSync(__dirname + '/server.key');
var cert = fs.readFileSync(__dirname + '/server.crt');

app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

// https
const httpsServer = https.createServer({ key, cert }, app);

// http
const httpServer = http.createServer(app);

// Listen https on port 3000
httpsServer.listen(3000, () => {
  console.log("https server starting on port 3000")
});

// Listen http on port 4000
httpServer.listen(4000, () => {
  console.log("http server starting on port 3001")
});

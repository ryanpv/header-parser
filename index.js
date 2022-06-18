require('dotenv').config();
var express = require('express');
var app = express();


// enable CORS for outside access - for testing
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express())


// API endpoint
app.get("/api/whoami", function (req, res) {
    console.log(req.headers);
  res.json({ ipaddress: req.socket.remoteAddress, language: req.header("accept-language"), software: req.headers["user-agent"] });
});

// different methods to acquire headers using express methods
// req.get('headerName'), req.header('headerName'), req.headers['headerName']

const port = process.env.PORT || 3999;

app.listen(port, () => {
    console.log('listening on port...' + port);
});


var express    = require('express');
var appConfig  = require('./config/app');
var bodyParser = require('body-parser');
var path       = require('path');

var app    = express();
app.use(express.static(path.join(__dirname, 'public')));
var stage = process.env.NODE_ENV || "development";
app.listen(appConfig.port, function () {
      console.log([appConfig.name, 'is running on port', appConfig.port.toString()].join(" "));
    });
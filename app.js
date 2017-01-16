var mosh       = require('mosh');
var models     = require('./models');
var express    = require('express');
var appConfig  = require('./config/app');
var bodyParser = require('body-parser');

var app    = express();
var routes = require('./routes/v1');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(mosh.initMosh);
app.use("/api/v1/", routes); //API Routes definition
/*
Handle 404
*/
app.use(mosh.initMoshErrorHandler);

//Start app
//can do stuff like sync models or any other thing needing bootstrap before listening
app.listen(appConfig.port);
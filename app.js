
/*
Attempt loading env files
*/
try{
	var envJSON = require('./config/env.json');
	for(var envProp in envJSON){
		process.env[envProp] = envJSON[envProp];
	}
	//console.log(envJSON);
}
catch (e){
	console.log(e);
}
//========================

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


var stage = process.env.NODE_ENV || "development";
if (stage === "development" || stage === "test" || stage === "local" || stage === "production") {
  models.sequelize.sync({force: false}).then(function () {
    app.listen(appConfig.port, function () {
      console.log([appConfig.name, 'is running on port', appConfig.port.toString()].join(" "));
    });
  });
}
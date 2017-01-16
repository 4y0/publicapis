var q = require('q');
var morx = require('morx');
var md5 = require('md5');
var appConfig = require('../config/app');
var util = require('../utils');
var models = require('../models');
var jwtSign = require('./jwt.sign');


var spec = morx.spec({})
			   .build('email', 'required:true, validators:isEmail, eg:ayodejsol@gmail.com')
			   .build('password', 'required:true, eg:12345')
			   .end();

function login(data){

	var d = q.defer();
	var paramsGlobal;

	q.fcall( () => {

		var result = morx.validate(data, spec, {throw_error:true});
		var params = paramsGlobal = result.params;

		var hashedPassword = md5(params.password + appConfig.salt);

		return models.user.findOne({where:{email:params.email, password:hashedPassword}});

	})
	.then( (foundUser) => {

		if(!foundUser){
			throw {code:'WUOP', message:'Wrong username or password'};
		}

		return jwtSign({payload:foundUser});

	})
	.then( (token) => {

		if(!token){
			throw {code:'SYSERR', message:'Some errors occured while trying to login.'};
		}
		
		d.resolve(token);
	})
	.catch( (err) => {

		//util.log(err, 3, "Error");
		d.reject(err);

	})

	return d.promise;

}
login.morxspc = spec;
module.exports = login;
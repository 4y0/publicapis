var q = require('q');
var morx = require('morx'); 
var appConfig = require('../config/app');
var util = require('mt1l'); 
var jwt = require('jsonwebtoken');

var spec = morx.spec({})
			   .build('payload', 'required:true')
			   .build('expiration', 'required:false, eg:3h')
			   .end();

spec.payload.eg = {user:19280};

function sign(data){

	var d = q.defer();

	q.fcall( () => {

		var result = morx.validate(data, spec, {throw_error:true});
		var params = result.params;
		params.expiration = params.expiration || appConfig.tokenExpiration;

		return jwt.sign(params.payload, appConfig.JWTSECRET, {expiresIn:params.expiration});

	})
	.then( (token) => {

		util.log(token, 3, "JWT");
		d.resolve(token);

	})
	.catch( (err) => {

		d.reject(err);

	})

	return d.promise;

}

sign.morxspc = spec;
module.exports = sign;
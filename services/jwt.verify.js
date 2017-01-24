var q = require('q');
var morx = require('morx'); 
var appConfig = require('../config/app');
var util = require('mt1l'); 
var jwt = require('jsonwebtoken');

var spec = morx.spec({})
			   .build('token', 'required:true, eg:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxOTI4MCwiaWF0IjoxNDg0NTk5MzgwLCJleHAiOjE0ODQ2MTAxODB9.6A-bDiPASmn2gELCPFSkWAGv2-PJ-LQtAVlfnGX-_00') 
			   .end(); 

function verify(data){

	var d = q.defer();

	q.fcall( () => {

		var result = morx.validate(data, spec, {throw_error:true});
		var params = result.params;
		params.expiration = params.expiration || appConfig.tokenExpiration;

		return jwt.verify(params.token, appConfig.JWTSECRET);

	})
	.then( (payload) => {

		util.log(payload, 3, "JWT-DECODED");
		d.resolve(payload);

	})
	.catch( (err) => {

		util.log(err, 3, "JWT-ERR");
		d.reject(err);

	})

	return d.promise;

}

verify.morxspc = spec;
module.exports = verify;
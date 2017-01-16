var loginService = require('../../../services/login');
var utils = require('../../../utils');
module.exports = function (req, res, next){
		
		loginService(req.body).then( (token)=>{

			utils.jsonS(res, token, "Login successful");

		})
		.catch((err) => {

			utils.jsonF(res, null, err.message);

		})

}
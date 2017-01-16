var utils = require('../../../utils');
module.exports = function (req, res, next){

	utils.jsonS(res, {versionInfo:"CITIDEV-API VERSION 1", stamp:new Date()}, "Version Info");

}
module.exports = {
	port:process.env.PORT || 9912,
	name: process.env.APPNAME || 'PUBLICAPIS',
	salt: process.env.PWSALT || '@#$%!!&^*---0981928',
	tokenExpiration:"5h",
	JWTSECRET:process.env.JWTSECRET || '$*%&*$-CITIDEV-(*#(($*#'
}
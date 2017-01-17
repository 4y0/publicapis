module.exports = {
	port:process.env.PORT || 3959,
	name: process.env.APPNAME || 'APP NAME',
	salt: process.env.PWSALT || '@#$%!!&^*---0981928',
	tokenExpiration:"5h",
	JWTSECRET:process.env.JWTSECRET || '$*%&*$-CITIDEV-(*#(($*#'
}
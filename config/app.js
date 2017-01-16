module.exports = {
	port:process.env.PORT || 3989,
	name: 'CITDEV API',
	salt: process.env.PWSALT || '@#$%!!&^*---0981928',
	tokenExpiration:"5h",
	JWTSECRET:process.env.JWTSECRET || '$*%&*$-CITIDEV-(*#(($*#'
}
module.exports = function (req, res, next){

	console.log(Date.now(), " RSTAMP");
	next();

}
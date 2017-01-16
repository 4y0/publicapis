"use strict";
var q = require('q'); 
var MWV_UTILS = {};

/**
* Extract parameters from a param spec definition
*
* @method paramExtract
* @param param_source - Source to extract params from
* @param param_spec   - Spec to use when extracting params
*/ 
MWV_UTILS.paramExtract = function (param_source, param_spec){
	param_source = param_source || {};
	var extracted_params = {};
	var error_messages   = [];

	var no_errors = true;

	for(var param in param_spec){

		if (param_spec.hasOwnProperty(param)) {

			var spec = param_spec[param];
			if(spec.required == 'true' && (typeof param_source[param] == 'undefined' || param_source[param] === "")){
				no_errors = false;
				error_messages.push( param + ' is required' );
			}
			else
			{
				if(!spec.map)
				{
					if(param_source[param])
           extracted_params[param] = param_source[param];
       }
       else
       {
         if(param_source[param])
           extracted_params[spec.map] = param_source[param]; 
       }

     }

   }

 }

 return {
  no_errors:no_errors,
  params:extracted_params,
  error_messages:error_messages.join(' , ')
}

}

function json_send(res, data, message, status, status_code, meta){
	data        = data || null;
	message     = message || "";
	status      = status || "success";
	status_code = status_code || 200;

	var response_json = {
		status:status,
		message:message,
		data:data
	};
	if(meta)
		response_json.meta = meta;

	res.status(status_code).json(response_json);
}


MWV_UTILS.jsonS = function (res, data, message, meta) {
	json_send(res, data, message, 'success', 200, meta);
}


MWV_UTILS.jsonF = function (res, data, message) {
	json_send(res, data, message, 'error', 400);
}

MWV_UTILS.log = function (thing_to_log, num, title){
  num = num || 5;
  title = title || "LOGSTART";
  console.log("\n\n\n\n\n\n<*****************" + title + "***********************>");
  for(var i=0; i < num; i++)
  console.log("**************************************************");
  console.log(thing_to_log);
  for(var i=0; i < num; i++)
  console.log("**************************************************");
  console.log("<******************"+ title +"-END***********************>\n\n\n\n\n\n");

}

MWV_UTILS.randomString = function (length, chars) {
  if(!chars){
    chars = '#aA!';
  }
  var mask = '';
  if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (chars.indexOf('#') > -1) mask += '0123456789';
  if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
  var result = '';
  for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
};

MWV_UTILS.getPaginationMeta = function(perpage, total, currentpage, baseurl, usequery ) {
	var meta = {};
	meta.total_pages = Math.ceil(total / perpage);
	currentpage = (currentpage * 1) || 1;
	meta.next_page = (currentpage && currentpage != meta.total_pages) ? currentpage + 1 : null;
	meta.prev_page = (currentpage && currentpage > 1) ? currentpage - 1 : null;

  var page_url = usequery ? '?page=' : '';
	meta.next_url =  (currentpage && currentpage != meta.total_pages) ? baseurl + "/" + page_url + meta.next_page : null;
	meta.prev_url =  (currentpage && currentpage > 1) ? baseurl + "" + page_url + meta.prev_page : null;
	return meta;
};

module.exports = MWV_UTILS;

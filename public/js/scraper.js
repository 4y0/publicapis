//Run on Todd's github repo https://github.com/toddmotto/public-apis to get APIs as JSON.

var heads = $("thead");

var apis = [];
var hlen = heads.length;
var h3s = $("h3");
h3s = h3s.slice(1); //Remove first h3 as it doesn contain stuff we need
for (var x = 0; x < hlen; x++){
		
		var h = heads.eq(x);
		
		var headings = h.find("th");
		var tbody = h.next();
		var trs = tbody.find("tr"); 
		trs.each( function () {

			var tds = $(this).find("td");
			var api = {};
			tds.each( function (i) {

				if(headings[i].innerText == "Link"){
					api[headings[i].innerText] = $(this).find('a').attr('href');
				}else{
					api[headings[i].innerText] = $(this).text();
				}

				api['Category'] = h3s[x].innerText;
				

			});
			apis.push(api);

		})



}
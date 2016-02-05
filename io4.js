var filterFn = require("./mymodule.js");

filterFn(process.argv[2], process.argv[3], function(err, list){

	if(err)
		throw err;

	list.forEach(function(element, index){
		console.log(element);
	});
});
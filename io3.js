if(process.argv.length>3){
	var fs = require('fs');
	var pt = require('path');

	fs.readdir(process.argv[2], function(err, files){
		if(err)
			throw err;

		if(files.length >0){

			files.forEach(function(element, index){
				
				if(pt.extname(element) === "." + process.argv[3]) {
					console.log(element);
				}
			});
		}
	});
	
}else{
	console.log("No Arguments passed");
}
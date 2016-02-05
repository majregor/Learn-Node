if(process.argv.length>2){
	var fs = require('fs');

	fs.readFile(process.argv[2], {encoding: 'utf8'}, function(err, data){

		if(err) 
			throw err;
		
		console.log(data.split("\n").length-1);

	});
	
}else{
	console.log("No Arguments passed");
}
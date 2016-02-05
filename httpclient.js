var http = require("http");

if(process.argv.length>2){

	http.get(process.argv[2], function(response){

		response.on("data", function(data){

			console.log(data.toString());
		});
		// Same as 
		// response.setEncoding('utf8');
		// response.on("data", console.log);
		// response.on("error", console.log);

		response.on("error", function(e){
			console.log("Error retrieving contents");
		});


	});
}else{
	console.log('No URL argument passed');
}
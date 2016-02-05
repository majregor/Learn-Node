if(process.argv.length>2){
	var fs = require('fs');

	var bufString = fs.readFileSync(process.argv[2]);
	var stringArray = bufString.toString().split("\n");
	console.log(stringArray.length-1);
}else{
	console.log("No Arguments passed");
}
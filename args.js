if(process.argv.length>2){
	var sum = 0;
	for(var i=2; i<process.argv.length; i++){
		sum += Number(process.argv[i]);
	}
	console.log(sum);
}else{
	console.log("No Arguments passed");
}
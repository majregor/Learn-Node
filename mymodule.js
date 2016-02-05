var fs = require('fs');
var pt = require('path');

module.exports = function(path, extension, callback){

	fs.readdir(path, function(err, files){
		if(err)
			return callback(err);

		var arr=[];
		if(files.length >0){
			files.forEach(function(element, index){
				
				if(pt.extname(element) === "." + extension) {
					arr.push(element)
				}
			});
		}

		return callback(err, arr);
	});
}
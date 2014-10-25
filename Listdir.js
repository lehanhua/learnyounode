var fs = require('fs');
var path = require('path');
var files = [];

function Listdir(dir, filter, callback){
	fs.readdir(dir, function(err,list){
		//early return
		if (err) 
			return callback(err,null);
		list.forEach(function(file){
			if (path.extname(file) == '.'+filter){
				files.push(file);
			}
		});
		//no errors, call callback with 'null' error
		return callback(null, files);
	});
}

module.exports = Listdir;
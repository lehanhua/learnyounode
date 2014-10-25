/** ex 6 **/
var Listdir = require('./Listdir.js');
var dir = process.argv[2];
var filter = process.argv[3];

Listdir(dir,filter, function(err,data){
	if (err)
		throw err
	data.forEach(function(file){
		console.log(file);
	});
});



/** ex5 **
var fs = require('fs');
var dir = process.argv[2];
var filter = "."+process.argv[3];

//console.log(filter);
fs.readdir(dir, function (err,data) {
	if (err) throw err;
	for (var i in data){
		if (data[i].indexOf(filter) != -1){
			console.log(data[i]);
		}	
	}
});
**/
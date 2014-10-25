var http = require("http");
var totalChar = 0;
var completeStr = "";

http.get(process.argv[2], function(response){
	response.on("data", function(data){
		//console.log(data.length)
		totalChar += data.length;
		completeStr += data.toString();
	});
	response.on("end", function(){
		console.log(totalChar);
		console.log(completeStr);
	})
});
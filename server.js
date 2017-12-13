var express = require("express");
var app = express();

app.use(express.static("client/build"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/client/build/index.html");
});

app.get("/bucket_list", function(req, res){
	res.json({name: "test"});
});

app.listen(3000, function(){
	console.log("Listening");
});

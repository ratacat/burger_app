var express = require("express"),
	app = express();
var path = require("path");

var viewsDir = path.join(process.cwd(), "views");

var burgers = [
	"catburger",
	"zebraburger",
	"wolfburger",
	"redneckburger",
	"futureburger",
	"psyburger"
];

//root route
app.get("/", function (req,res) {
	var text = "View all burgers at "+ 
			   "<a href='/burgers'>/burgers</a>"; 
	res.send(text);
});

app.get("/burgers", function(req,res){
	var burgersText = burgers.join(", ");
	res.send(burgersText);
});

app.get("/contact", function(req,res){
	var contactPath = path.join(viewsDir, "contact.html");
	res.sendFile(contactPath);
	//console.log(res);
});

app.listen(3000,function(){
	console.log("Express Up and running!!");
});

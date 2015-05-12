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
	var homePath = path.join(viewsDir, "home.html");
	res.sendFile(homePath);
	console.log(req.params);
	console.log(req.query);
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

app.post("/burgers", function(req,res){
	res.send("BURGER POST REceived");
})

app.listen(3000,function(){
	console.log("Express Up and running!!");
});

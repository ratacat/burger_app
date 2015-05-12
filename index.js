var express = require("express");
var body = require("body-parser");
var path = require("path");

var app = express();
app.use(body.urlencoded({extended: true}));




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
	var burgerName = req.body.burger.name;
	burgers.push(burgerName+ "burger");
	//res.send("See all burgers at localhost:3000/burgers");
	res.redirect("/burgers");
	//console.log(burgerName);
});

app.listen(3000,function(){
	console.log("Express Up and running!!");
});

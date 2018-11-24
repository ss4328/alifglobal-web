var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render('index');
});

app.get("/hammer", function(req,res){
    res.render('hammer');
});

app.get("/hammerBit", function(req,res){
    res.render('hammerBit');
});

app.get("/home", function(req,res){
    res.render('index');
});

app.get("/about", function(req,res){
    res.render('about');
});

app.get("/dthDrilling", function(req,res){
    res.render('DTHDrilling');
});

app.get("/effectUnderWaterTemperatureAltitude", function(req,res){
    res.render('effectUnderWaterTemperatureAltitude');
});

app.get("/contact", function(req,res){
    res.render('contact');
});

app.get("/hammerStorage", function(req,res){
    res.render('hammerStorage');
});

app.get("/rotationSpeed", function(req,res){
    res.render('rotationSpeed');
});

app.get("/totalWeightOnBitOrFeedPressure", function(req,res){
    res.render('totalWeightOnBitOrFeedPressure');
});

app.get("/drillingWithFoamAndPolymers", function(req,res){
    res.render('drillingWithFoamAndPolymers');
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started!");
})
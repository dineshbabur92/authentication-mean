var express = require("express");
var path = require("path");
//var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var passport = require("passport");
var mongoose = require("mongoose");
var app = new express();
var path = require("path");

require("./app_api/models/users.js");
require("./app_api/config/passport.js");


var routesApi = require("./app_api/routes/index");

//require("./app_api/routes/index.js");

mongoose.connect("mongodb://localhost:27017/authentication_app");

app.use(passport.initialize());
app.get("/", function(req, res){
    
   console.log("get successful");
//   res.sendFile(path.join(__dirname, 'index.html'));
    res.sendfile("index.html");
    
});
app.use("/api",routesApi);
app.use(bodyParser.json());
app.use("/app-client", express.static(__dirname + "/app-client"));

app.use(function(err, req, res, next){
    
    if(err.name==="UnauthorizedError"){
        
        res.status(401);
        res,json({"message" : err.name + ": " + err.message});
        
    }
    
});

app.listen(1234, function(){
    
    console.log("listening in port 1234");
    
});

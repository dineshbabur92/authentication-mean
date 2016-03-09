var express = require("express");
var path = require("path");
//var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var passport = require("passport");
var mongoose = require("mongoose");
var app = new express();

require("./app_api/models/users.js");
require("./app_api/config/passport.js");


var routesApi = require("./app_api/routes/index");

//require("./app_api/routes/index.js");

mongoose.connect("mongodb://localhost:27017/authentication_app");

app.use(passport.initialize());
app.use("./api",routesApi);
app.use(function(err, req, res, next){
    
    if(err.name==="UnauthorizedError"){
        
        res.status(401);
        res,json({"message" : err.name + ": " + err.message});
        
    }
    
});

app.listen(3000, function(){
    
    console.log("listening in port 3000");
    
});

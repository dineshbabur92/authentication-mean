var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var passport = require("passport");


require("./app_api/models/users.js");
require("./app_api/config/passport.js");

app.use(passport.initialize());
app.use("./api",routesApi);
app.use(function(err, req, res, next){
    
    if(err.name==="UnauthorizedError"){
        
        res.status(401);
        res,json({"message" : err.name + ": " + err.message});
        
    }
    
});

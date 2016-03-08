var passport = require("passport");
var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports.register = function(req, res){
    
  var user = new User();

    user.email = req.body.email;
    user.name = req.body.name;
    user.setPassword(req.body.password);
    
    user.save(function(err){
        if(err){
            
            console.log(err);
            
        }
//        Don’t forget that in reality this code would have a number of error traps, validating form inputs and catching errors in the save function.
        var token;
        token = user.generateJWT();
        res.status(200);
        res.json({"token":token});
        
    });
    
};


module.exports.login = function(req, res){
    
    passport.authenticate("local", function(err, user, info){
        
        var token;
        
        if(err){
            
            res.status(404).json(err);
            
        }
        
        if(user){
        
            token = user.generateJWT();
            res.status(200);
            res.json({
                
                "token": token
                
            });
            
        } else{
            
            res.status(401).json(info);
            
        }
        
    })(req, res);
    
}
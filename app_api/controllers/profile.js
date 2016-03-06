var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports.profileRead = function(req, res){
    
    if(!req.payload._id){
        
        res.status(401).json({
            
            "message": "Unauthorized: private profile"
            
        })
        
    }
    else{
        
        User
            .findById(req.payload._id)
            .exec(function(err, user){
            
                res.status(200).json(user);
            
        });
//        Naturally, this should be fleshed out with some more error trapping – for example if the user isn’t found 
        
    }
    
}
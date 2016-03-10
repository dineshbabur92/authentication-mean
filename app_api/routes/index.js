var express = require("express");
var jwt = require("express-jwt");
var auth = jwt({
    
    secret: "MY_SECRET",
    userProperty: "payload"
    
    
});
var router = express.Router();
var profileCtrl = require("../controllers/profile");
var homeCtrl = require("../controllers/home");

router.get("/profile", auth, profileCtrl.profileRead);
router.get("/", homeCtrl.sendIndex);
//function(req, res){
//    
//    res.send("succesfully got");
//    console.log("get successful");
//    
//}

module.exports = router;
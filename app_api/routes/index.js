var express = require("express");
var jwt = require("express-jwt");
var auth = jwt({
    
    secret: "MY_SECRET",
    userProperty: "payload"
    
    
});
var router = express.Router();
var profileCtrl = require("../controllers/profile");

router.get("/profile", auth, profileCtrl.profileRead);
router.get("/", )

module.exports = router;
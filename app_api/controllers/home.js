module.exports.sendIndex = function(req, res){
    console.log("sending");
    res.sendfile("../../index.html");
    
};
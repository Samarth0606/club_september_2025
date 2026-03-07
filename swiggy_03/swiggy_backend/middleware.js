const jwt = require('jsonwebtoken');
const UserModel = require('./model/User.model');

function verifyToken(req,res,next){
    if(
        req.headers && 
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT"
    ){
        jwt.verify(
            req.headers.authorization.split(" ")[1],
            'SECRETKEY',
            function(err, verifiedToken) {
                if(err){
                    return res.status(403).send("Invalid token")
                }
                UserModel.findById(verifiedToken.id)
                .then((userData)=>{
                    req.user = userData; //adding this by myself
                    next();
                })
            }
        );
    }else{
        return res.status(404).json({message: "token doesnot exists"})
    }

}
module.exports = verifyToken
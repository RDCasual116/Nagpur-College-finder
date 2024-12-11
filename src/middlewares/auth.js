const jwt=require("jsonwebtoken");
const User=require("../models/user.js");

const authcheck= async(req,res,next)=>{
const token=req.cookies?.accessToken;
   if(!token){
return res.json({
    success:false,
    message:"token not found pls try again"
});
   }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
if(!decodedToken){
return res.json({success:false,message:"invalid token"});
}
//console.log(decodedToken);
const email=decodedToken.email;
console.log(email);
req.user=await User.findOne({email});
console.log(req.user);
req.user=req.user._id;
next();
}

module.exports=authcheck;

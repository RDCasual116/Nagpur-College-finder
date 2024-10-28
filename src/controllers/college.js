const College=require("../models/college.js");

const allCollege=async (req,res,next)=>{
const colleges=await College.find();
    res.json(colleges);
}
module.exports={allCollege};

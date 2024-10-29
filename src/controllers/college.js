const College=require("../models/college.js");

const allCollege=async (req,res,next)=>{
try{const colleges=await College.find();
    res.json(colleges);
}
catch(err){ next(err); }
}
const findCollege=async(req,res,next)=>{
try{
const id=req.params.id;
    const college=await College.findById(id);
console.log(college);
    if(!college){
return res.json({success:false,message:"no college found"});
    }
    res.json(college);
}
    catch(err){ next(err); }
}

module.exports={allCollege,findCollege};

    const User=require("../models/user.js");
    const Service=require("../models/service.js");
    const cloudinary=require("../utils/cloudinary.js");


    const addService=async(req,res,next)=>{
    try{
        const user=req.user;
    const service=req.body;
    let links=[];
        for(let i=0;i<req.files.length;i++){
    const entry=await cloudinary.uploadOnCloudinary(req.files[i].path);
            links.push(entry.url);
        }


        const serviceobj={    name:service.name,
    id:service.id,
            terms:service.feature,
            type:service.type,
            by:user,
        price:parseInt(service.price),
        photo:links,
        contact:parseInt(service.contact),
        location:service.location,

    }
    console.log(serviceobj);

        await Service.create(serviceobj);
    return res.json({
        success:true,
        message:"service added"
    });
    }
    catch(err){next(err);}

}
const allService=async (req,res,next)=>{
try{const result=await Service.find();
    res.json(result);
}
catch(err){next(err)}
}


const servicesave=async (req,res,next)=>{
const serviceid=req.params.id;
const service=await Service.findOne({id:serviceid});
    /*
   */
    try{
  const user = await User.findByIdAndUpdate(
      req.user,
      { $addToSet: { bookmarkser:service._id } }, // Add to `fav` array if it doesn't already exist
      { new: true, useFindAndModify: false } // Return the updated document
    );
 res.json({success:true}); 
}
catch(err){
next(err);
}
}
const fetchService=async(req,res,next)=>{
try{
    const service=await Service.findOne({id:req.params.id});
res.json(service);
}catch(err){
next(err);
}
}

module.exports={addService,allService,servicesave,fetchService};

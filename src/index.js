require("dotenv").config();
const express=require('express');
const connectdb=require("./db/index.js");
const cookieparser=require("cookie-parser");
const user=require("./routes/user.js");
const upload=require("./middlewares/multer.js");
const cloudinary=require("./utils/cloudinary.js");
const College=require("./models/college.js");
const collroute=require("./routes/college.js");
const serviceroute=require("./routes/service.js");

const app=express();
const port=process.env.PORT||7000;

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded());
app.use(express.static("../public"));



app.use('/api/user',user);
app.use('/api/college',collroute);
app.use('/api/service',serviceroute);


//temperary route
app.post('/api/coll',upload.array('photos',10),async(req,res,next)=>{
try{
    const data=req.body;
let links=[];
    for(let i=0;i<req.files.length;i++){
const entry=await cloudinary.uploadOnCloudinary(req.files[i].path);
        links.push(entry.url);
    }
    console.log(data);
    console.log(links);
const response=await College.create({
    name:data.name,
    location:data.location,
    about:data.about,
    website:data.website,
photo:links
});
return res.json({
    success:true,
    message:"college added"
});

}
catch(err){
next(err);
}}
);
//temperary route




connectdb().then(()=>{
app.listen(port,()=>{console.log("server listening on",port);})
})

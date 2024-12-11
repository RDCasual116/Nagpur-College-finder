const {Router}=require("express");
const {addService,allService,servicesave,fetchService}=require("../controllers/service.js");
const authcheck=require("../middlewares/auth.js");
const upload=require("../middlewares/multer.js");

const router=Router();


/*router.route("/addservice").get(authcheck,(req,res,next)=>{
console.log("ok",req.user);
});*/
router.route("/addservice").post(authcheck,upload.array('photos',10),addService);
router.route("/allservice").get(allService);
router.route("/:id").get(fetchService);
router.route("/save/:id").get(authcheck,servicesave);

module.exports=router;

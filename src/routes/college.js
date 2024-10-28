const {Router}=require("express");
const {allCollege}=require("../controllers/college.js");
const router=Router();


router.route("/allcollege").get(allCollege);

module.exports=router;

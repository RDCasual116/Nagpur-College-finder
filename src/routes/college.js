const {Router}=require("express");
const authcheck=require("../middlewares/auth.js");

const {allCollege,findCollege,collegesave}=require("../controllers/college.js");

const router=Router();


router.route("/allcollege").get(allCollege);
router.route("/:id").get(findCollege);
router.route("/save/:id").get(authcheck,collegesave);

module.exports=router;

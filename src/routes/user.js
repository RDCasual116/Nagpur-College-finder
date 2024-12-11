const {Router}=require("express");
const {emailEntry,verify,login,fetchFavSer,fetchFavColl}=require("../controllers/user.js");

const router=Router();


router.route("/email").post(emailEntry);
router.route("/verify").post(verify);
router.route("/login").post(login);
router.route("/favourite/ser").get(fetchFavSer);
router.route("/favourite/coll").get(fetchFavColl);
//router.route("/password").post();
module.exports=router;

 const {Router}=require("express");
const {addCComment,addSComment,fetchCComment,fetchSComment} =require("../controllers/comment.js");
const authcheck=require("../middlewares/auth.js");


const router=Router();

console.log(addCComment);
router.route("/college/:id/comment").post(authcheck,addCComment);
router.route("/service/:id/comment").post(authcheck,addSComment);

module.exports=router;

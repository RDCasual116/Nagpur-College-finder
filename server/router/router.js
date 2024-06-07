const express = require("express");
const {getallreq}=require("./route.js")
const router = express.Router(); 
router.route('/').get(getallreq);
module.exports = router; 

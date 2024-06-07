const express=require("express");
const routr=require("../router/router.js");

const app=express();
app.use(express.json());
app.use(routr);

app.listen(5000,()=>{
console.log("Server Up");
});

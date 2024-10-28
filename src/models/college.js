const mongoose=require( "mongoose");

const collegeSchema=new mongoose.Schema(
    {	name:{
		type:String,
		required:true,
	},
      	comments:[
		{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"

        }
	],
        photo:[{
        type:String,
    }],
   website:{
       type:String,
           required:true,
   },
    about:{
        type:String,
            required:true,
    },
        location:{
		type:String,
		required:true,
        },}
);
const College=mongoose.model("College",collegeSchema);

module.exports=College;

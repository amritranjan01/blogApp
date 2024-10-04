// we have to make the schema and mount to the each of the controller
// then use the controller in the routes and export it the folowing 
const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",

    }],

});

module.exports=mongoose.model("Post",postSchema);
const mongoose=require("mongoose");


// route handler

const commentSchema= new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }

});

// exporting the schema named the comment 
// by refrence with the only post id to this 
// and giving refrence to the post

module.exports=mongoose.model("Comment",commentSchema);
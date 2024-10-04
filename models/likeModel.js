

const mongoose=require("mongoose");

// route handler 

const likeSchema= new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",

    },

    users:{
        type:String,
        required:true,
    }
});

// exporting the module

module.exports= mongoose.model("Like",likeSchema);
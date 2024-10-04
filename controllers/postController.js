const Post=require("../models/postModel");
const Comment=require("../models/commentModel");
const Like=require("../models/likeModel");

exports.createPost =async (req,res)=>{
    try{
        const {title ,body}=req.body;
        const post =new Post({
            title,body,
        });

        const savedPost =await post.save();
         
        res.json({
            post:savedPost,
        })


    }
    catch(error){
        return res.status(500)({
            error: "Error while Creating the post "
        });

    }

};

exports.getAllPosts =async(req,res) =>{
    try{
        // depends if we want id of like 
        // and comment then it is comnpletely fine
        // but if we want all the comment and like which by 
        // any person 
        // then we have to do extra calculation

        const posts =await Post.find().populate("likes").populate("comments").exec();
        res.json(
            {
                posts,
            }
        )

    }

    catch(error){
        return res.status(500)({
            error :"Error while fetching all the posts"
        });
    }

};
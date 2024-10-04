 // first i have to importing the models 
 const Like =require("../models/likeModel");
 const Post =require("../models/postModel");
//  const Comment =require("../models/commentModel");

exports.likePost= async (req,res) =>{
   try{
      const {post,user}=req.body;

      const like =new Like({
         post,user,
      });

      const savedLike= await like.save();

      // update the post collection basis on this
      const updatedPost = await Post.findByIdAndUpdate(post,{$push :{likes:savedLike._id}},{new:true});



      res.json({
         post:updatedPost,
      }); 



   }

   catch(error){
      return res.status(500).json({
         error: "Error while  doing the like of the post",
       });
   }
};


// now we have to do the coding for the unlike the post
exports.unlikePost = async(req,res) =>{
   try{
      const {post,like}=req.body;
       // by finding the like id we delete in the like model
       // while in post by id and delete we are ablew to delete the entry 
       // from the array of the like array
      const deletedLike = await Like.findOneAndDelete({post:post,_id:like});
      const updatedPost = await Post.findByIdAndUpdate(post ,{$pull :{likes:deletedLike._id}},{new:true});

      res.json({
         post:updatedPost,
      })

   }

   catch(error){
      return res.status(500).json({
         error: "Error while  doing the unliking the post",
       });
   }
};



 exports.dummyLink= async (req,res)=>{
    res.send("This is the Dummy page");
 };
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    // Create a new comment instance
    const comment = new Comment({
      post,
      user,
      body,
    });

    // Save the comment to the database
    const savedComment = await comment.save();

    // Find the post by its ID and push the new comment into the comments array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }).populate("comments").exec();

    res.json({
      post: updatedPost,
    });
  } 
  catch (error) {
    return res.status(500).json({
      error: "Error while creating Comment",
    });
  }
};

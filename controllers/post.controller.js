import { addPost, getAllPosts, addPostComment, getAllComments, likePost, dislikePost, deletePost } from "../services/post.service";

const _addPost = (req, res, next) => {
  // Validation area
  const { description, imagePath, addedByUserId } = req.body;

  const data = {
    description: description,
    imagePath: imagePath,
    addedByUserId: addedByUserId
  };
  addPost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      message: results,
    });
  });
};
export { _addPost as addPost };

const _getAllPosts = (req, res, next) => {
  // Validation area
  const data = {};
  getAllPosts(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
export { _getAllPosts as getAllPosts };

const _addPostComment = (req, res, next) => {
  // Validation area
  const { postId, comment, addedByUserId } = req.body;

  const data = {
    postId: postId,
    comment: comment,
    addedByUserId: addedByUserId
  };
  addPostComment(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      message: results,
    });
  });
};
export { _addPostComment as addPostComment };

const _getAllComments = (req, res, next) => {
  // Validation area
  const { postId } = req.query;

  const data = {
    postId: postId
  };
  getAllComments(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
export { _getAllComments as getAllComments };

const _likePost = (req, res, next) => {
  // Validation area
  const { postId } = req.body;

  const data = {
    postId: postId
  };
  likePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      message: results,
    });
  });
};
export { _likePost as likePost };

const _dislikePost = (req, res, next) => {
  // Validation area
  const { postId } = req.body;

  const data = {
    postId: postId
  };
  dislikePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      message: results,
    });
  });
};
export { _dislikePost as dislikePost };

const _deletePost = (req, res, next) => {
  // Validation area
  const { postId } = req.query;

  const data = {
    postId: postId
  };
  deletePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      message: results,
    });
  });
};
export { _deletePost as deletePost };

const {
  addPost, getAllPosts, addPostComment, getAllComments, likePost, dislikePost, deletePost
} = require("../services/post.service");

exports.addPost = (req, res, next) => {
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
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.getAllPosts = (req, res, next) => {
  // Validation area
  const data = {};
  getAllPosts(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.addPostComment = (req, res, next) => {
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
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.getAllComments = (req, res, next) => {
  // Validation area
  const { postId } = req.query;

  const data = {
    postId: postId
  };
  getAllComments(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.likePost = (req, res, next) => {
  // Validation area
  const { postId } = req.body;

  const data = {
    postId: postId
  };
  likePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.dislikePost = (req, res, next) => {
  // Validation area
  const { postId } = req.body;

  const data = {
    postId: postId
  };
  dislikePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.deletePost = (req, res, next) => {
  // Validation area
  const { postId } = req.query;

  const data = {
    postId: postId
  };
  deletePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

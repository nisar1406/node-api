import db from "../config/db.config";

export const addPost = (data, callback) => {
  const { description, imagePath, addedByUserId } = data;
  db.query(
    `INSERT INTO posts (description, imagePath, datetimeCreated, addedByUserId) VALUES (?, ?, ?, ?)`,
    [description, imagePath, new Date(), addedByUserId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Post added successful`);
    }
  );
}

export const getAllPosts = (data, callback) => {
  db.query(
    `SELECT p.id AS postId, p.description, p.datetimeCreated,
    p.likeCount, p.dislikeCount, p.addedByUserId, u.firstName, u.lastName
    FROM posts as p INNER JOIN users AS u ON p.addedByUserId = u.id`,
    [],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
}

export const addPostComment = (data, callback) => {
  const { postId, comment, addedByUserId } = data;
  db.query(
    `INSERT INTO comments (postId, comment, datetimeCreated, addedByUserId) VALUES (?, ?, ?, ?)`,
    [postId, comment, new Date(), addedByUserId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, 'Comment added successfully!');
    }
  );
}

export const getAllComments = (data, callback) => {
  const { postId } = data;
  db.query(
    `SELECT c.comment, c.datetimeCreated, c.addedByUserId, u.firstName, u.lastName
    FROM comments as c INNER JOIN users AS u ON c.addedByUserId = u.id WHERE c.postId = ?`,
    [postId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
}

export const likePost = (data, callback) => {
  const { postId } = data;
  db.query(
    `UPDATE posts SET likeCount = likeCount + 1 where id = ?`,
    [postId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.affectedRows > 0) return callback(null, `Post liked successful`);
      else return callback('Invalid post.')
    }
  );
}

export const dislikePost = (data, callback) => {
  const { postId } = data;
  db.query(
    `UPDATE posts SET likeCount = likeCount - 1 where id = ?`,
    [postId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.affectedRows > 0) return callback(null, `Post disliked successful`);
      else return callback('Invalid post.')
    }
  );
}

export const deletePost = (data, callback) => {
  const { postId } = data;
  db.query(
    `DELETE FROM posts where id = ?`,
    [postId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.affectedRows > 0) return callback(null, `Post deleted successful`);
      else return callback('Invalid post.')
    }
  );
}

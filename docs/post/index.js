const getTodos = require('./get.all.posts');

module.exports = {
  '/posts/get-all-posts': {
    ...getTodos
  }
}

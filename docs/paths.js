
const user = require('./user');
const posts = require('./post');

module.exports = {
  paths: {
    ...user,
    ...posts,
  }
};

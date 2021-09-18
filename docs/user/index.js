const userLogin = require('./user.login');
const registerUser = require('./register.user');

module.exports = {
  '/users/login': {
    ...userLogin
  },
  '/users/register': {
    ...registerUser
  }
}

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require("../config/db.config");
const { secret, expireTime } = require('../config/jwt.config');

exports.register = async (data, callback) => {
  const { firstName, lastName, emailId, password } = data;
  const salt = await bcrypt.genSalt(10);
  const userPassword = await bcrypt.hash(password, salt);
  db.query(
    `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`,
    [firstName, lastName, emailId, userPassword],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Registration successful`);
    }
  );
};

exports.login = (data, callback) => {
  const { emailId, password } = data;
  db.query(
    `SELECT * FROM users WHERE emailId = ?`,
    [emailId],
    async (error, results, fields) => {
      if (error) return callback(error, 500, 'Something went wrong.');
      if (results.length > 0) {
        const isPasswordValid = await bcrypt.compare(password, results[0].password);
        const { emailId, firstName, lastName } = results[0];
        if (isPasswordValid) {
          const token = jwt.sign({
            emailId: emailId,
            firstName: firstName,
            lastName: lastName
          }, secret, { expiresIn: expireTime })
          return callback(null, 200, token);
        } else return callback('error', 404, 'Invalid credentials.')
      } else return callback('error', 404, 'User not found.');
    }
  );
};

// db.query(
//   `SELECT id FROM users WHERE emailId = ? and password = ?`,
//   [emailId, password],
//   (error, results, fields) => {
//     if (error) return callback(error);
//     if (results.length > 0) return callback(null, `Login successful`);
//     else return callback('Invalid credentials.')
//   }
// );

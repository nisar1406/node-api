const db = require("../config/db.config");

exports.register = (data, callback) => {
  const { firstName, lastName, emailId, password } = data;
  db.query(
    `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`,
    [firstName, lastName, emailId, password],
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
    `SELECT id FROM users WHERE emailId = ? and password = ?`,
    [emailId, password],
    (error, results, fields) => {
      if (error) return callback(error);
      if (results.length > 0) return callback(null, `Login successful`);
      else return callback('Invalid credentials.')
    }
  );
};

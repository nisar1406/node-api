import { genSalt, hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import db from "../config/db.config";
import { secret, expireTime } from '../config/jwt.config';

export const register = async (data, callback) => {
  const { firstName, lastName, emailId, password } = data;
  const salt = await genSalt(10);
  const userPassword = await hash(password, salt);
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
}

export const login = (data, callback) => {
  const { emailId, password } = data;
  db.query(
    `SELECT * FROM users WHERE emailId = ?`,
    [emailId],
    async (error, results, fields) => {
      if (error) return callback(error, 500, 'Something went wrong.');
      if (results.length > 0) {
        const isPasswordValid = await compare(password, results[0].password);
        const { emailId, firstName, lastName } = results[0];
        if (isPasswordValid) {
          const token = sign({
            emailId: emailId,
            firstName: firstName,
            lastName: lastName
          }, secret, { expiresIn: expireTime })
          return callback(null, 200, token);
        } else return callback('error', 404, 'Invalid credentials.')
      } else return callback('error', 404, 'User not found.');
    }
  );
}

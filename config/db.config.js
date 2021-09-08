const { createPool } = require("mysql");
/** Connection pool creation - START */
const host = process.env.DB_HOST || "localhost";
const user = process.env.DB_USER || "root";
const password = process.env.DB_PASSWORD || "password";
const name = process.env.DB_NAME || "node-post-api";

const db = createPool({
  port: 3306,
  host: host,
  user: user,
  password: password,
  database: name,
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;

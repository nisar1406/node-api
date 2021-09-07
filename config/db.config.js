const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "node-post-api",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;

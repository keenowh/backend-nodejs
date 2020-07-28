const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.user || "postgres",
  password: process.env.password || "postgres",
  host: process.env.host || "localhost",
  port: 5432,
  database: process.env.database || "restful",
});

module.exports = pool;

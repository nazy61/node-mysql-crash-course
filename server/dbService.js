const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    host            : process.env.HOST,
    user            : process.env.USER,
    database        : process.env.DATABASE,
    password        : process.env.PASSWORD,
    port            : process.env.DB_PORT,
  });

module.exports = pool;
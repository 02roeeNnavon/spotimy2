const { Pool, Client } = require("pg");
const config = require('./config')

let pool = new Pool({
    host: config.pgHost,
    user: config.pgUser,
    port: config.pgPort,
    password: config.pgPassword,
    database: config.pgDatabase,
  });

async function getData(query) {
  return await pool.query(query);
}

module.exports = {
  getData,
};

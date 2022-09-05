const { Pool, Client } = require("pg");

let pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Aa123456",
    database: "postgres",
  });

async function getData(query) {
  return await pool.query(query);
}

module.exports = {
  getData,
};

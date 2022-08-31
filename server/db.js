const { Pool, Client } = require("pg");

const connectTodb = async () => {
  let mypool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Aa123456",
    database: "postgres",
  });
  await mypool.connect();
  return mypool;
};

async function queriesToDb(client, query) {
  return (songs = await client.query(query));
}

async function getData(queries) {
  const client = await connectTodb();
  try {
    return (apps = queriesToDb(client, queries));
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
}

module.exports = {
  getData,
};

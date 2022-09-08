module.exports = {
  port: process.env.PORT || 4000,
  pgUser: process.env.PGUSER || "postgres",
  pgHost: process.env.PGHOST || "localhost",
  pgDatabase: process.env.PGDATABASE || "postgres",
  pgPassword: process.env.PGPASSWORD || "Aa123456",
  pgPort: process.env.PGPORT || 5432,
};

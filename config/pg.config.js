
const pgConfig = {
  dbName: process.env.PGDATABASE,
  userName: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
};

module.exports = pgConfig;


const pgConfig = {
  dbName: process.env.PGDATABASE,
  userName: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
};

module.exports = pgConfig;

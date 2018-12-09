const { Pool } = require('pg');
const logger = require('../lib/logger');

const pool = new Pool();

const tableNames = [
  'clinick',
];

async function createTables() {
  await pool.query(`
    CREATE TABLE IS NOT EXISTS clinick (
      id INTEGER UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP,
      clinick_name VARCHAR(80) NOT NULL,
      owner_name VARCHAR(80) NOT NULL,
      owner_last_name VARCHAR(80) NOT NULL,
      email VARCHAR(80) NOT NULL,
      password VARCHAR(255) NOT NULL,
      PRIMARY KEY(id)
    );
  `);

  pool.end();
}

function dropTables(callBack) {
  pool.query(`
    DROP TABLE ${tableNames.join(',')};
  `, callBack);
}

async function init() {
  try {
    await dropTables(createTables());
  } catch (e) {
    logger.error(e.message);
    process.exit(1);
  }
}

module.exports.createTables = createTables;
module.exports.dropTables = dropTables;
module.exports = init;

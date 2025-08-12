// lib/db.js
// import { Pool } from 'pg';

// const pool = new Pool({
//   user: 'root',
//   host: 'localhost',
//   database: 'steps_robotics',
//   password: 'RaL@2023#$',
//   port: 5432,
// });

// export default pool;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'steps_robotics',
  password: 'RaL@2023#$',
  port: 5432,
});

module.exports = pool;




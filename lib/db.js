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




// @/lib/db.js
// import pkg from 'pg';
// const { Pool } = pkg;

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL, // or host/user/password/db
//   ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
// });

// export async function query(text, params) {
//   const client = await pool.connect();
//   try {
//     const res = await client.query(text, params);
//     return res;
//   } finally {
//     client.release();
//   }
// }






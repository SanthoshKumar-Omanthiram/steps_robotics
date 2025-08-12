// script.db.js
// const pool = require('./lib/db');

// async function createTable() {
//   try {
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(100),
//         email VARCHAR(100) UNIQUE
//       )
//     `);
//     console.log('User table created successfully');
//   } catch (err) {
//     console.error('Error:', err);
//   } finally {
//     await pool.end();
//   }
// }

// createTable();

const pool = require('./db');

async function recreateUsersTable() {
  try {
    await pool.query(`DROP TABLE IF EXISTS users`);
    await pool.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(100),
        student_id VARCHAR(50),
        age INT,
        grade VARCHAR(20),
        email VARCHAR(100) UNIQUE,
        parent_phone VARCHAR(20),
        password_hash TEXT,
        role TEXT
      )
    `);

    console.log('User table dropped and recreated successfully');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await pool.end();
  }
}

recreateUsersTable();




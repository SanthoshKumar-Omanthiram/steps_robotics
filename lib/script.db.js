// script.db.js
const pool = require('./db');
async function recreateUsersTable() {
  try {
    // Drop existing tables (order matters if you have FK constraints)
    await pool.query(`DROP TABLE IF EXISTS password_reset_otps`);
    await pool.query(`DROP TABLE IF EXISTS users`);
    // Recreate users table
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
        role TEXT,
        access SMALLINT DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `);
    // Recreate password_reset_otps table
    await pool.query(`
      CREATE TABLE password_reset_otps (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        otp VARCHAR(6),
        expires_at TIMESTAMP WITHOUT TIME ZONE,
        used BOOLEAN DEFAULT false
      )
    `);
    console.log('All tables are created successfully!:');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await pool.end();
  }
}
recreateUsersTable();
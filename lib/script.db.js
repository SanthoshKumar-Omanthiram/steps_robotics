
const pool = require('./db');

async function recreateUsersTable() {
  try {
    await pool.query(`DROP TABLE IF EXISTS password_reset_otps`);
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

      await pool.query(`
   CREATE TABLE IF NOT EXISTS course_objectives (
    id SERIAL PRIMARY KEY,
    course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    objective TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
    `);
      await pool.query(`
    CREATE TABLE programs (
  id SERIAL PRIMARY KEY,
  days VARCHAR(255),
  duration VARCHAR(255),
  time VARCHAR(255),
  venue TEXT,
  materials TEXT,
  mentors TEXT,
  batch_size TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);
         await pool.query(`
 CREATE TABLE IF NOT EXISTS course_highlights (
    id SERIAL PRIMARY KEY,
    course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    highlight TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);



      await pool.query(`
      CREATE TABLE password_reset_otps (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        otp VARCHAR(6),
        expires_at TIMESTAMP WITHOUT TIME ZONE,
        used BOOLEAN DEFAULT false
      )
    `);

    console.log('Users and password_reset_otps tables recreated successfully ✅');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await pool.end();
  }
}

recreateUsersTable();

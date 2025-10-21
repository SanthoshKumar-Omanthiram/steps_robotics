const pool = require('./db'); // Your db connection file

async function recreateUsersTable() {
  try {
    console.log("Dropping existing tables...");

    // Drop existing tables (in correct order)
    await pool.query(`DROP TABLE IF EXISTS password_reset_otps`);
    await pool.query(`DROP TABLE IF EXISTS course_highlights`);
    await pool.query(`DROP TABLE IF EXISTS course_objectives`);
    await pool.query(`DROP TABLE IF EXISTS programs`);
    await pool.query(`DROP TABLE IF EXISTS contacts`);
    await pool.query(`DROP TABLE IF EXISTS users`);

    console.log("Creating tables...");

    // USERS TABLE
    await pool.query(`
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(100),
        student_id VARCHAR(50),
        age INT,
        grade VARCHAR(20),
        email VARCHAR(100) UNIQUE,
        parent_phone VARCHAR(20),
        password_hash TEXT,
        role TEXT,
        access SMALLINT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // CONTACTS TABLE
    await pool.query(`
      CREATE TABLE contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(100),
        lastName VARCHAR(100),
        email VARCHAR(150),
        phone VARCHAR(20),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // PROGRAMS TABLE
    await pool.query(`
      CREATE TABLE programs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        days VARCHAR(255),
        duration VARCHAR(255),
        time VARCHAR(255),
        venue TEXT,
        materials TEXT,
        mentors TEXT,
        batch_size TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // COURSE OBJECTIVES TABLE
    await pool.query(`
      CREATE TABLE course_objectives (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT NOT NULL,
        objective TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      )
    `);

    // COURSE HIGHLIGHTS TABLE
    await pool.query(`
      CREATE TABLE course_highlights (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT NOT NULL,
        highlight TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      )
    `);

    // PASSWORD RESET OTP TABLE
    await pool.query(`
      CREATE TABLE password_reset_otps (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        otp VARCHAR(6),
        expires_at TIMESTAMP,
        used BOOLEAN DEFAULT false,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    console.log("✅ All tables created successfully!");
  } catch (err) {
    console.error("❌ Error creating tables:", err);
  } finally {
    await pool.end();
    console.log("Database connection closed.");
  }
}

recreateUsersTable();

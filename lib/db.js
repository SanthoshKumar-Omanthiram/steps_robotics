// lib/db.js
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  // database: 'steps_robotics',
  database: 'STEP',
  password: 'RaL@2023#$',
  port: 5432,
});

pool.connect()
  .then(client => {
    console.log("✅ Connected to PostgreSQL successfully!");
    client.release();
  })
  .catch(err => {
    console.error("❌ Connection error:", err.stack);
  });

export default pool;
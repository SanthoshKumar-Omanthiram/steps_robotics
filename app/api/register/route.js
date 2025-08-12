// app/api/users/route.js
import pool from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';


export async function GET(request) {
  try {
    const result = await pool.query('SELECT * FROM users'); // replace with your table
    return Response.json(result.rows);
  } catch (error) {
    return Response.json(
      { error: 'Database error', details: error.message },
      { status: 500 }
    );
  }
}

// POST method to create a new user
export async function POST(req) {
  try {
    const body = await req.json();
    const { full_name, student_id, age, grade, email, parent_phone, password, role } = body;

    if (!full_name || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Hash password
    const password_hash = await bcrypt.hash(password, 10);

    // Insert into DB
    const result = await pool.query(
      `INSERT INTO users (full_name, student_id, age, grade, email, parent_phone, password_hash, role)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, full_name, student_id, age, grade, email, parent_phone, role`,
      [full_name, student_id, age, grade, email, parent_phone, password_hash, role]
    );

    return NextResponse.json({ message: 'User registered successfully', user: result.rows[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}


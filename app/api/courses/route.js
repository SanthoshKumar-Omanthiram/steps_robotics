import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import pool from '@/lib/db';

export const config = {
  api: {
    bodyParser: false,
  },
};

const ensureUploadDir = () => {
  const uploadDir = path.join(process.cwd(), '/public/uploads');
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
  return uploadDir;
};

const saveBlobToUploads = async (fileBlob) => {
  if (!fileBlob) return '';
  const uploadDir = ensureUploadDir();
  const arrayBuffer = await fileBlob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const safeName = `${Date.now()}-${(fileBlob.name || 'upload').replace(/[^a-zA-Z0-9_.-]/g, '_')}`;
  const filePath = path.join(uploadDir, safeName);
  fs.writeFileSync(filePath, buffer);
  return `/uploads/${safeName}`;
};

export async function GET(req) {
  try {
    const result = await pool.query('SELECT * FROM courses ORDER BY id ASC');
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    // Ensure optional columns exist to prevent SQL errors on insert
    try {
      await pool.query(`ALTER TABLE courses ADD COLUMN IF NOT EXISTS heroictitle TEXT`);
      await pool.query(`ALTER TABLE courses ADD COLUMN IF NOT EXISTS heroicimage TEXT`);
    } catch (e) {
      // Ignore if table doesn't exist or insufficient privileges; real error will surface below
      console.warn('Warning ensuring course columns:', e?.message);
    }

    // Use Web API FormData in App Router to avoid request stream truncation
    const formData = await req.formData();
    const title = (formData.get('title') || '').toString();
    const description = (formData.get('description') || '').toString();
    const heroictitle = (formData.get('heroictitle') || '').toString();
    const imageBlob = formData.get('heroicimage');

    if (!title) {
      return new Response(JSON.stringify({ message: 'Course title is required' }), { status: 400 });
    }

    let heroicimage = '';
    if (imageBlob && typeof imageBlob === 'object' && 'arrayBuffer' in imageBlob) {
      heroicimage = await saveBlobToUploads(imageBlob);
    }

    const result = await pool.query(
      `INSERT INTO courses (title, description, heroictitle, heroicimage)
       VALUES ($1, $2, $3, $4) RETURNING id`,
      [title, description || '', heroictitle || '', heroicimage]
    );

    return new Response(
      JSON.stringify({ message: 'Course added', id: result.rows[0].id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}

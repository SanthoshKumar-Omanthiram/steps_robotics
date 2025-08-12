// app/api/logout/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect(new URL('/login', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));

  response.cookies.set('token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0), // Immediately expire the cookie
  });

  return response;
}

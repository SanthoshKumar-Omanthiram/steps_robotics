import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const protectedPaths = ['/dashboard', '/api/protected'];
  const { pathname } = request.nextUrl;

  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
      // Use jose for JWT verification in Edge Runtime
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);

      await jwtVerify(token, secret);
    } catch (err) {
      console.error('JWT verification failed:', err);
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

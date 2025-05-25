import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const rawUsers = process.env.ADMIN_USERS || '';
  const allowedUsers = rawUsers.split(',').map(u => u.trim());

  const isAuthorizedUser = allowedUsers.includes(username);
  const isValidPassword = password === process.env.ADMIN_PASSWORD;

  if (isAuthorizedUser && isValidPassword) {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRATION || '3600';

    if (!secret) {
      return new NextResponse('JWT_SECRET not defined', { status: 500 });
    }

    const token = jwt.sign({ username, isAdmin: true }, secret, {
      expiresIn: parseInt(expiresIn, 10),
    });

    const response = NextResponse.json({ token });
    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: parseInt(expiresIn, 10),
    });

    return response;
  }

  return new NextResponse('Unauthorized', { status: 401 });
}

import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'SECRET';

export async function GET(req) {
    try {
        const cookies = req.cookies.get('token');
        if (!cookies) {
            return NextResponse.json({ message: 'No token provided' }, { status: 401 });
        }

        const { payload } = await jwtVerify(cookies, new TextEncoder().encode(SECRET_KEY));
        
        return NextResponse.json({ message: 'Token is valid', user: payload }, { status: 200 });
    } catch (error) {
        console.error('JWT verification failed', error);
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
}
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("token")?.value;

    const isPublicPath = [
        '/login',
        '/signup',
        '/verify-email',
        '/',
        '/markets',
        '/about_us',
        '/contact_us',
        '/advertise',
        '/privacy',
        '/how',
        '/terms'
    ].some(publicPath => path.startsWith(publicPath));

    // Validate the token if it exists
    if (token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// Apply middleware to all routes except the public ones
export const config = {
    matcher: [
        '/((?!forget-password).*)',
    ],
};
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;

    const token = request.cookies.get("token")?.value;
    const isPublicPath = path === '/login' || path === '/signup' || path === '/forget-password' || 
                        path === '/verify-email' || path === '/reset-password' || path === '/';

    if ( isPublicPath && token ) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if ( !isPublicPath && !token ) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        // '/add_marketplace',
        // '/add_product',
        // '/bidding',
        // '/chat',
        // '/manage_products',
        // '/manage_management',
        // '/marketplace',
        // '/markets',
        // '/post_request',
        // '/profile',
        // '/seller_dashboard',
        // '/submit_request',
    ],
}
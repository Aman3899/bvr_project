import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;
const secretKey = new TextEncoder().encode(JWT_SECRET); // Convert to Uint8Array for jose

export async function middleware(req) {
    
    const token = req.cookies.get("token")?.value || getTokenFromHeader(req);
    const { pathname } = req.nextUrl;

    const protectedRoutes = [
        "/post_request",  
        // "/api/:path*",
        "/manage_marketplaces",
        "/manage_marketplaces/add_marketplace",
        "/manage_marketplaces/edit_marketplace",
        "/manage_products",
        "/manage_products/add_product",
        "/manage_products/edit_product",
        "/market_management",
        "/submit_request",
        "/profile",
        "/bidding",
        "/chat",
        "/chat/Client",
        "/chat/Seller"
    ];
    const apiProtectedRoutes = ["/api/"]; // API Routes (except login & logout)
    const publicApiRoutes = ["/api/users/login", "/api/users/logout"]; // Open API Routes

    // ✅ Allow Public API Routes without authentication
    if (publicApiRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    // 🔒 Verify JWT for Protected Routes
    let isAuthenticated = false;

    if (token) {
        try {
            const { payload } = await jwtVerify(token, secretKey);
            isAuthenticated = !!payload;
        } catch (error) {
            console.error("Invalid Token:", error.message);
        }
    }

    // 🔒 Protect UI Routes - Redirect if not authenticated
    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
        if (!isAuthenticated) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    // 🔒 Protect API Routes - Return 401 if not authenticated
    if (apiProtectedRoutes.some((route) => pathname.startsWith(route))) {
        if (!isAuthenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
    }

    return NextResponse.next();
}

// 📌 Apply middleware to both UI and API routes
export const config = {
    matcher: [
        "/post_request",  
        // "/api/:path*",
        "/manage_marketplaces",
        "/manage_marketplaces/add_marketplace",
        "/manage_marketplaces/edit_marketplace",
        "/manage_products",
        "/manage_products/add_product",
        "/manage_products/edit_product",
        "/market_management",
        "/submit_request",
        "/profile",
        "/bidding",
        "/chat",
        "/chat/Client",
        "/chat/Seller"
    ],
};

// ✅ Helper function to extract token from headers
function getTokenFromHeader(req) {
    const cookieHeader = req.headers.get("cookie");
    if (!cookieHeader) return null;

    const cookies = Object.fromEntries(cookieHeader.split("; ").map(c => c.split("=")));
    return cookies.token || null;
}

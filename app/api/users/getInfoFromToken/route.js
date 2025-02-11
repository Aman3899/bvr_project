// app/api/verify/route.js
import { jwtVerify } from "jose";
import { NextResponse } from 'next/server';

const secret = new TextEncoder().encode(process.env.JWT_SECRET); // Use your actual secret

export async function POST(req) {
    try {
        const body = await req.json();
        const { token } = body;

        if (!token) {
            return NextResponse.json({ message: "Token is required" }, { status: 400 });
        }

        const { payload } = await jwtVerify(token, secret);
        console.log("Verified Payload:", payload);

        const email = payload?.email;
        const userId = payload?.sub;

        console.log("Email:", email);
        console.log("User ID:", userId);

        return NextResponse.json({ email, userId, payload });
    } catch (error) {
        console.error("Token verification failed:", error.message);
        return NextResponse.json({ message: "Invalid token", error: error.message }, { status: 401 });
    }
}
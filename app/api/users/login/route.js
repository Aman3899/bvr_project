import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import { SignJWT } from "jose";

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return NextResponse.json({ error: "User not Found!" }, { status: 404 });
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid Password!" }, { status: 400 });
        }

        if (!user.isVerified) {
            return NextResponse.json({ error: "Email is not verified!" }, { status: 400 });
        }

        // ✅ Create JWT using `jose`
        const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
        const token = await new SignJWT({ userId: user.id, email: email })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("1h")
            .sign(secretKey);

        const response = NextResponse.json({
            message: "Login Successfully!",
            success: true,
        }, { status: 200 });

        // ✅ Set token in cookies properly
        response.headers.append(
            "Set-Cookie",
            `token=${token}; HttpOnly; Secure; Max-Age=3600; Path=/`
        );

        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
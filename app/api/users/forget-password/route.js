import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email } = reqBody;

        // Check if user exists in the database
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return NextResponse.json({ error: "User not found!" }, { status: 404 });
        }

        if (!user.isVerified) {
            return NextResponse.json({ error: "Email is not verified!", verified: user.isVerified }, { status: 400 });
        }

        return NextResponse.json({
            message: "User found successfully!",
            success: true,
            email: user.email,
            verified: user.isVerified
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
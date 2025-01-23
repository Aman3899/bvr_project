import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await prisma.user.findUnique({ where: { email } });

        if ( !user ) {
            return NextResponse.json({error: "User not Found!"}, {status: 404});
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        const isEmailVerified = user.isVerified;

        if ( !isPasswordValid ) {
            return NextResponse.json({error: "Invalid Password!"}, {status: 400});
        }

        if ( !isEmailVerified ) {
            return NextResponse.json({error: "Email is not verified!"}, {status: 400});
        }

        const token = jwt.sign({ userId: user.id, email: email }, process.env.JWT_SECRET, {expiresIn: "1h"});

        const response = NextResponse.json({
            message: "Login Successfully!",
            success: true,
        }, {status: 200});

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60,
            path: "/",
        });

        return response;
    }
    catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = NextResponse.json( {message: "Logged Out Successfully", success: true},{status: 200} );
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: true,
            maxAge: 0,
            path: "/",
        });

        return response;
    }
    catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
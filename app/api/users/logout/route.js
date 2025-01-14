import { connectToDB } from "@/lib/dbConfig";
import { NextResponse } from "next/server";

connectToDB();

export async function GET() {
    try {
        const response = NextResponse.json( {message: "Logged Out Successfully", success: true},{status: 200} );
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        });

        return response;
    }
    catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
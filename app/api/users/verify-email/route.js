import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConfig";
import User from "@/models/userModel";


connectToDB();


export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;

        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() }
        });

        if ( !user ) {
            return NextResponse.json({error: "Invalid or Expired Token"}, {status: 400});
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();

        return NextResponse.json({message: "Email Verified Successfully"}, {status: 200});
    }
    catch (error) {
        return NextRequest.json({error: error.message}, {status: 500});
    }
}
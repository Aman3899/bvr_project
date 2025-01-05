import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connectToDB();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await User.findOne({email});

        if ( !user ) {
            return NextResponse.json({error: "User not Found!"}, {status: 404});
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if ( !isPasswordValid ) {
            return NextResponse.json({error: "Invalid Email or Password!"}, {status: 400});
        }

        const tokenData = {
            id: user._id,
            email: user.email,
            username: user.username
        };

        const token = await jwt.sign(tokenData, process.env.JSON_TOKEN_SECRET, {expiresIn: "1h"})

        const response = NextResponse.json({
            message: "Login Successfully!",
            success: true,
        }, {status: 200});

        response.cookies.set("token", token, {
            httpOnly: true
        });

        return response;
    }
    catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
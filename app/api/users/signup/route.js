import User from "@/models/userModel";
import { connectToDB } from "@/lib/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";


connectToDB();

export async function POST(request) {
    try {
        const reqBody = request.json();
        const { email, username, password } = reqBody;

        const isUserExist = await User.findOne( {email} );

        if ( isUserExist ) {
            return NextResponse.json({message: "User Already Exists!"}, {status: 400});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            email,
            username,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        if ( savedUser ) {
            return NextResponse.json({message: "User Created Successfully!"}, {status: 200});
        }
    }
    catch (error) {
        return NextResponse.json({message: "Something went wrong!" + error.message}, {status: 500});
    }
}
import { getDataFromToken } from "@/utils/getDataFromToken";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectToDB } from "@/lib/dbConfig";


connectToDB();

export async function POST(reqeust) {
    try {
        const userId = await getDataFromToken(reqeust);

        const user = await User.findOne({_id: userId}).select("-password");

        if ( !user ) {
            return NextResponse.json({message: "User not found!"}, {status: 404});
        }

        return NextResponse.json({message: "User Found", user}, {status: 200});
    }
    catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
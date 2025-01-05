import { getDataFromToken } from "@/utils/getDataFromToken";
import { User } from "lucide-react";
import { NextResponse } from "next/server";

const { connectToDB } = require("@/lib/dbConfig");


connectToDB();

export async function POST(reqeust) {
    try {
        const userId = await getDataFromToken(reqeust);

        const user = await User.findOne({id: userId}).select("-password");

        if ( !user ) {
            return NextResponse.json({message: "User not found!"}, {status: 404});
        }

        return NextResponse.json({user}, {status: 200});
    }
    catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;

        const user = await prisma.user.findFirst({
            where : {
                verifyToken: token,
                verifyTokenExpiry: {
                    gt: new Date(),
                }
            }
        });

        if ( !user ) {
            return NextResponse.json({error: "Invalid or Expired Token"}, {status: 400});
        }

        await prisma.user.update({
            where: { id: user.id },
            data: {
                isVerified: true,
                verifyToken: null,
                verifyTokenExpiry: null,
            },
        });

        return NextResponse.json({message: "Email Verified Successfully"}, {status: 200});
    }
    catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
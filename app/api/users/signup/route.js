import { prisma } from '@/lib/prisma';
import { sendMail } from '@/utils/mailer';
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';


export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, username, password } = reqBody;

        const isUserExist = await prisma.user.findUnique({ where: { email } });

        if ( isUserExist ) {
            return NextResponse.json({message: "User Already Exists!"}, {status: 400});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
            }
        });

        
        await sendMail({email, emailType: "VERIFY", userId: newUser.id});

        return NextResponse.json({message: "User Created Successfully!"}, {status: 200});
    }
    catch (error) {
        return NextResponse.json({message: "Something went wrong!" + error.message}, {status: 500});
    }
}
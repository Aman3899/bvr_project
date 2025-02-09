import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        const { email, oldPassword, newPassword } = await request.json();

        // Validate input
        if (!email || !oldPassword || !newPassword) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Find user by email
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return NextResponse.json({ error: "User not found!" }, { status: 404 });
        }

        // Verify old password
        const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ error: "Current password is incorrect!" }, { status: 401 });
        }

        // Hash new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Update password in database
        await prisma.user.update({
            where: { email },
            data: { password: hashedNewPassword },
        });

        return NextResponse.json({
            message: "Password updated successfully!",
            success: true,
        }, { status: 200 });

    } catch (error) {
        console.error("Password update error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
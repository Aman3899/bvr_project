import { prisma } from '../lib/prisma.js';
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";


export async function sendMail({ email, emailType, userId }) {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if (emailType === "VERIFY") {
            await prisma.user.update({
                where: { id: userId },
                data: {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: new Date(Date.now() + 3600000)
                }
            });
        }
        else if (emailType === "RESET") {
            await prisma.user.update({
                where: { id: userId },
                data: {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: new Date(Date.now() + 3600000)
                }
            });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'abdulwahab.dev.codes@gmail.com',
                pass: process.env.GMAIL_APP_PASSWORD,
            }
        });

        const mailOptions = {
            from: 'no-reply@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your Email Address" : "Reset your Password",
            html: `<p>Click 
                        <a href="${process.env.DOMAIN}/verify-email?token=${hashedToken}">Here</a> 
                    to ${emailType === "VERIFY" ? "Verify your Email Address" : "Reset your Password"} 
                    <br>
                    ${process.env.DOMAIN}/verify-email?token=${hashedToken}
                    </p>`,
        };

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;

    } catch (error) {
        throw new Error(error.message);
    }
}
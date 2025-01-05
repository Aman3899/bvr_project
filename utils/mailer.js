import User from "@/models/userModel";
import nodemailer from "nodemailer";


export async function sendMail( {email, emailType, userId} ) {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        
        if ( emailType === "VERIFY" ) {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            });
        }
        else if ( emailType === "RESET" ) {
            await User.findByIdAndUpdate(userId, {
                forgetPasswordToken: hashedToken,
                forgetPasswordTokenExpiry: Date.now() + 3600000
            });
        }

        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "0b6f9b8cc00261",
                pass: "8ae9727def51d0"
            }
        });

        const mailOptions = {
            from: 'm.amanullah0830@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your Email Address" : "Reset your Password",
            html: `<p>Click 
                        <a href="${process.env.DOMAIN}/verify-email?token=${hashedToken}">Here</a> 
                    to ${emailType === "VERIFY" ? "Verify your Email Address" : "Reset your Password"} 
                    <br>
                    ${process.env.DOMAIN}/veridy-email?token=${hashedToken}
                    </p>`,
        };

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;

    } catch (error) {
        throw new Error(error.message);
    }
}
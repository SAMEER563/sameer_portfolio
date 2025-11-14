// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, phone, email, subject, message } = await req.json();

        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sameermaurya482@gmail.com", // your email
                pass: process.env.GMAIL_APP_PASSWORD, // app password from Gmail
            },
        });

        // Send email
        await transporter.sendMail({
            from: email, // sender's email
            to: "sameermaurya482@gmail.com", // your receiving email
            subject: `New Contact Message - ${subject}`,
            text: `
            Name: ${name}
            Phone: ${phone}
            Email: ${email}

            Message:
            ${message}
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Email send failed:", err);
        return NextResponse.json(
            { error: "Email send failed" },
            { status: 500 }
        );
    }
}

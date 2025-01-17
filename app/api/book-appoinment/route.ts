import { sendMail } from "@/app/lib/mailer";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();

    try {
        // Send an email to the admin
        const sendmailToAdmin = await sendMail({
            email: "thetechnova023@gmail.com",
            sendTo: "dhanjeet03jan@gmail.com",
            subject: "New Appoinment",
            text: "A new appoinment has been made",
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #fff;
                            color: #333;
                            margin: 0;
                            padding: 0;
                        }
                        .email-container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #fff;
                            border-radius: 8px;
                            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            background-color: #DB2777;
                            padding: 20px;
                            text-align: center;
                            border-radius: 8px 8px 0 0;
                        }
                        .header h1 {
                            color: #fff;
                            margin: 0;
                        }
                        .email-content {
                            padding: 20px;
                            font-size: 16px;
                            line-height: 1.5;
                            color: #333;
                        }
                        .email-content p {
                            margin: 10px 0;
                        }
                        .email-content .label {
                            font-weight: bold;
                            color: #DB2777;
                        }
                        .footer {
                            background-color: #f8f8f8;
                            padding: 15px;
                            text-align: center;
                            border-radius: 0 0 8px 8px;
                        }
                        .footer p {
                            font-size: 14px;
                            color: #888;
                            margin: 0;
                        }
                        .button {
                            background-color: #DB2777;
                            color: #fff;
                            padding: 10px 15px;
                            border-radius: 5px;
                            text-decoration: none;
                            display: inline-block;
                            font-weight: bold;
                        }
                    </style>
                    <title>Appointment Confirmation</title>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h1>Appointment Booked Successfully!</h1>
                        </div>
                        <div class="email-content">
                            <p>Hello <span class="label">Owner</span>,</p>
                            <p>A new appoinment has booked to Venus Tent Light and Sound! Here are the details of your appointment:</p>

                            <p><span class="label">Name:</span> ${body.name}</p>
                            <p><span class="label">Email:</span> ${body.email}</p>
                            <p><span class="label">Phone Number:</span> ${body.phone}</p>
                            <p><span class="label">Event Type:</span> ${body.eventType}</p>
                            <p><span class="label">Event Date:</span> ${body.date}</p>
                            <p><span class="label">Event Time:</span> ${body.time}</p>
                            <p><span class="label">Services Needed:</span> ${body.services.join(", ")}</p>

                            <p>Contact the person with given details for furhter process related to booking.</p>
                        </div>
                    </div>
                </body>
                </html>

            `
        });

        if (!sendmailToAdmin.success) {
            return NextResponse.json({
                success: false,
                message: sendmailToAdmin.message,
            });
        }

        // Send an email to the user
        const sendmailToUser = await sendMail({
            email: "thetechnova023@gmail.com",
            sendTo: body.email,
            subject: "Appoinment Confirmation",
            text: "Your appoinment has been confirmed",
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #fff;
                            color: #333;
                            margin: 0;
                            padding: 0;
                        }
                        .email-container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #fff;
                            border-radius: 8px;
                            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            background-color: #DB2777;
                            padding: 20px;
                            text-align: center;
                            border-radius: 8px 8px 0 0;
                        }
                        .header h1 {
                            color: #fff;
                            margin: 0;
                        }
                        .email-content {
                            padding: 20px;
                            font-size: 16px;
                            line-height: 1.5;
                            color: #333;
                        }
                        .email-content p {
                            margin: 10px 0;
                        }
                        .email-content .label {
                            font-weight: bold;
                            color: #DB2777;
                        }
                        .footer {
                            background-color: #f8f8f8;
                            padding: 15px;
                            text-align: center;
                            border-radius: 0 0 8px 8px;
                        }
                        .footer p {
                            font-size: 14px;
                            color: #888;
                            margin: 0;
                        }
                        .button {
                            background-color: #DB2777;
                            color: #fff;
                            padding: 10px 15px;
                            border-radius: 5px;
                            text-decoration: none;
                            display: inline-block;
                            font-weight: bold;
                        }
                    </style>
                    <title>Appointment Confirmation</title>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h1>Appointment Booked Successfully!</h1>
                        </div>
                        <div class="email-content">
                            <p>Hello <span class="label">${body.name}</span>,</p>
                            <p>Thank you for booking an appointment with Venus Tent Light and Sound! Here are the details of your appointment:</p>

                            <p><span class="label">Name:</span> ${body.name}</p>
                            <p><span class="label">Email:</span> ${body.email}</p>
                            <p><span class="label">Phone Number:</span> ${body.phone}</p>
                            <p><span class="label">Event Type:</span> ${body.eventType}</p>
                            <p><span class="label">Event Date:</span> ${body.date}</p>
                            <p><span class="label">Event Time:</span> ${body.time}</p>
                            <p><span class="label">Services Needed:</span> ${body.services.join(", ")}</p>

                            <p>If the details are correct, we'll get in touch with you shortly to confirm your booking.</p>

                            <p>For any changes, please feel free to contact us.</p>
                        </div>
                        <div class="footer">
                            <p>Thank you for choosing Venus Tent Light and Sound!</p>
                            <a href="mailto:venuslightandsound123@gmail.com" style="color: white;" class="button">Contact Us</a>
                        </div>
                    </div>
                </body>
                </html>

            `
        });

        if (!sendmailToUser.success) {
            return NextResponse.json({
                success: false,
                message: sendmailToUser.message,
            });
        }

        // Create a new appointment in the database
        const newAppoinment = await prisma.appointments.create({
            data: {
                full_name: body.name,
                email: body.email,
                phone: body.phone,
                event_date: body.date,
                event_time: body.time,
                event_type: body.eventType,
                services: body.services,
            }
        });

        return NextResponse.json({
            success: true,
            appoinment: newAppoinment,
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        });
    }
}
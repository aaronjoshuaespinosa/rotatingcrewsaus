import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    // Extracting the data from the request body
    const { name, email, contactNumber, message } = req.body;

    // Basic validation to ensure fields are not empty
    if (!name || !email || !message || !contactNumber) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Configure the email transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can replace this with another email service if needed
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Set up the mail options with contact number included
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email address to receive the message
      subject: `New inquiry from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\nContact Number: ${contactNumber}\n\nInquiry:\n${message}\n\nThis message is sent from Rotating Crew Aus Website Inquiry`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error sending email." });
    }
  }

  // Handle unsupported methods
  res.status(405).json({ error: "Method Not Allowed" });
}

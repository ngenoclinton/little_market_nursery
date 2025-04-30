import nodemailer from "nodemailer"


const email  = process.env.EMAIL 
const password = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS, // app password or SMTP password
    },
  });

export const mailOptions = {
    from:email,
    to:email
}
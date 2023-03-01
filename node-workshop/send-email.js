import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hamzachebbah9999@gmail.com',
    pass: process.env.PASSWORD
  }
});

let mailOptions = {
  to: 'ryn51927@gmail.com',
  subject: 'Testing Nodemailer',
  text: 'This is a test email sent using Nodemailer.'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent:' + info.response);
  }
});
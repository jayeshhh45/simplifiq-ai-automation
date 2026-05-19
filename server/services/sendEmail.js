import nodemailer from "nodemailer";

const sendEmail = async (to, company, pdfPath) => {
  try {
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: `AI Business Audit Report for ${company}`,
      text: `
Hi,

Please find attached your personalized AI Business Audit Report.

Thank you,
SimplifIQ AI Automation System
      `,
      attachments: [
        {
          filename: `${company}_report.pdf`,
          path: pdfPath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email Error:", error);
  }
};

export default sendEmail;
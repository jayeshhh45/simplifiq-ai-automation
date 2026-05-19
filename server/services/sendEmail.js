import nodemailer from "nodemailer";

const sendEmail = async (to, company, pdfPath) => {
  try {

    console.log("Sending email to:", to);

    const transporter = nodemailer.createTransport({

      host: "smtp-relay.brevo.com",

      port: 587,

      secure: false,

      auth: {
        user: process.env.BREVO_EMAIL,
        pass: process.env.BREVO_SMTP_KEY,
      },
    });

    await transporter.sendMail({

      from: process.env.BREVO_EMAIL,

      to,

      subject: `AI Business Audit Report for ${company}`,

      text: `
AI Business Audit Report

Please find attached your personalized report.
      `,

      attachments: [
        {
          filename: `${company}_report.pdf`,
          path: pdfPath,
        },
      ],
    });

    console.log("Email sent successfully");

  } catch (error) {

    console.log("Email Error:", error);
  }
};

export default sendEmail;
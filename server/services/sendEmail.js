import axios from "axios";
import fs from "fs";

const sendEmail = async (to, company, pdfPath) => {
  try {

    console.log("Sending email to:", to);

    console.log(
      "BREVO API KEY:",
      process.env.BREVO_SMTP_KEY
    );

    console.log(
      "BREVO EMAIL:",
      process.env.BREVO_EMAIL
    );

    const pdfBase64 = fs
      .readFileSync(pdfPath)
      .toString("base64");

    const payload = {

      sender: {
        name: "SimplifIQ",
        email: process.env.BREVO_EMAIL,
      },

      to: [
        {
          email: to,
        },
      ],

      subject: `AI Business Audit Report for ${company}`,

      htmlContent: `
        <h2>AI Business Audit Report</h2>

        <p>
          Please find attached your personalized
          AI-generated business audit report.
        </p>
      `,

      attachment: [
        {
          name: `${company}_report.pdf`,
          content: pdfBase64,
        },
      ],
    };

    console.log("Sending request to Brevo...");

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      payload,
      {
        headers: {
          "accept": "application/json",
          "api-key": process.env.BREVO_SMTP_KEY,
          "content-type": "application/json",
        },
      }
    );

    console.log("Email sent successfully");

    console.log("Brevo Response:", response.data);

  } catch (error) {

    console.log(
      "FULL EMAIL ERROR:",
      error.response?.data || error.message
    );
  }
};

export default sendEmail;
import axios from "axios";
import fs from "fs";

const sendEmail = async (to, company, pdfPath) => {
  try {

    console.log("Sending email to:", to);

    const pdfBase64 = fs
      .readFileSync(pdfPath)
      .toString("base64");

    const response = await axios.post(

      "https://api.brevo.com/v3/smtp/email",

      {
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
      },

      {
        headers: {
          "api-key": process.env.BREVO_SMTP_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Email sent successfully");

    console.log(response.data);

  } catch (error) {

    console.log(
      "Email Error:",
      error.response?.data || error.message
    );
  }
};

export default sendEmail;
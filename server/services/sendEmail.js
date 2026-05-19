import { Resend } from "resend";
import fs from "fs";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, company, pdfPath) => {
  try {

    console.log("Sending email to:", to);

    const pdfBuffer = fs.readFileSync(pdfPath);

    const response = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: [to],

      subject: `AI Business Audit Report for ${company}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          
          <h2 style="color: #2563eb;">
            AI Business Audit Report
          </h2>

          <p>
            Please find attached your personalized
            AI-generated business audit report.
          </p>

          <p>
            Generated automatically by
            SimplifIQ AI Automation System.
          </p>

        </div>
      `,

      attachments: [
        {
          filename: `${company}_report.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    console.log("Resend Response:", response);

    console.log("Email sent successfully");

  } catch (error) {

    console.log("Email Error:", error);
  }
};

export default sendEmail;
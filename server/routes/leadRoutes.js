import express from "express";
import scrapeWebsite from "../services/scrapeWebsite.js";
import generateInsights from "../services/generateInsights.js";
import generatePdf from "../services/generatePdf.js";
import sendEmail from "../services/sendEmail.js";
import logToSheets from "../services/logToSheets.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, company, website } = req.body;

    if (!name || !email || !company || !website) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Scrape website
    const scrapedData = await scrapeWebsite(website);

    // Generate AI insights
    const insights = await generateInsights(scrapedData);

    // Generate PDF
    const pdfPath = await generatePdf(company, insights);

    // Send Email
    await sendEmail(email, company, pdfPath);

    // Log to Google Sheets
    await logToSheets(name, email, company, "Report sent");


    res.status(200).json({
      message: "Lead processed and email sent successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

export default router;
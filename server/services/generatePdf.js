import puppeteer from "puppeteer";
import chromium from "@sparticuz/chromium";
import fs from "fs";
import path from "path";
import reportTemplate from "../templates/reportTemplate.js";

const generatePdf = async (company, insights) => {
  try {

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    const html = reportTemplate(company, insights);

    await page.setContent(html, {
      waitUntil: "domcontentloaded",
    });

    const reportsDir = path.join("reports");

    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir);
    }

    const pdfPath = path.join(
      reportsDir,
      `${company.replace(/\s+/g, "_")}_report.pdf`
    );

    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return pdfPath;

  } catch (error) {

    console.log("PDF Error:", error);

    return null;
  }
};

export default generatePdf;
import axios from "axios";
import * as cheerio from "cheerio";

const scrapeWebsite = async (websiteUrl) => {
  try {
    const { data } = await axios.get(websiteUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });

    const $ = cheerio.load(data);

    const title = $("title").text();

    const metaDescription =
      $('meta[name="description"]').attr("content") || "";

    const headings = [];

    $("h1, h2").each((i, el) => {
      headings.push($(el).text().trim());
    });

    const paragraphs = [];

    $("p").each((i, el) => {
      const text = $(el).text().trim();

      if (text.length > 30) {
        paragraphs.push(text);
      }
    });

    return {
      title,
      metaDescription,
      headings: headings.slice(0, 10),
      paragraphs: paragraphs.slice(0, 15),
    };
  } catch (error) {
    console.log("Scraping Error:", error.message);

    return {
      error: true,
      message: "Failed to scrape website",
    };
  }
};

export default scrapeWebsite;
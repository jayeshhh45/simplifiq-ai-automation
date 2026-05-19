import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const spreadsheetId = "1l8h2Ub0u4iW6vfXMkWOKKIL6dsHiPEw8KE-JRSVZ8QA";

const logToSheets = async (
  name,
  email,
  company,
  status
) => {
  try {
    const client = await auth.getClient();

    const sheets = google.sheets({
      version: "v4",
      auth: client,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
    [
    name,
    email,
    company,
    new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
    status,
  ],
],
      },
    });

    console.log("Logged to Google Sheets");
  } catch (error) {
    console.log("Sheets Error:", error);
  }
};

export default logToSheets;
# SimplifIQ – AI Lead Automation System

This project automates the lead follow-up process. When someone submits a form with their company details, the system automatically researches their business, generates a PDF audit report, and emails it to them — no manual work needed.

Built for the SimplifIQ AI Software Developer Intern Assessment.

---

## What it does

1. User fills out a form (name, email, company, website)
2. Backend scrapes their website to gather company info
3. Groq AI analyzes the data and generates business insights
4. A professional PDF report is created using Puppeteer
5. The report is emailed to the user automatically
6. Lead details are logged into Google Sheets

---

## Tech Used

- **Frontend** – React.js, Tailwind CSS
- **Backend** – Node.js, Express.js
- **AI** – Groq API (Llama 3.3 70B)
- **Scraping** – Axios, Cheerio
- **PDF** – Puppeteer
- **Email** – Nodemailer (Gmail)
- **Logging** – Google Sheets API

---

## Folder Structure

```
simplifiq-assessment/
├── client/        # React frontend
└── server/
    ├── routes/    # API endpoints
    ├── services/  # Scraping, AI, PDF, email logic
    ├── templates/ # PDF HTML templates
    └── reports/   # Generated PDFs
```

---

## Setup

**1. Clone the repo**
```bash
git clone <your-repo-link>
cd simplifiq-assessment
```

**2. Install dependencies**
```bash
cd client && npm install
cd ../server && npm install
```

**3. Create a `.env` file in the `server/` folder**
```env
PORT=5000
GROQ_API_KEY=your_groq_api_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

**4. Run the project**
```bash
# In one terminal
cd server && npm run dev

# In another terminal
cd client && npm run dev
```

---

## API

`POST /api/leads`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Vercel",
  "website": "https://vercel.com"
}
```

Once this is called, the full pipeline runs automatically.

---

## What's in the PDF Report

- Company Overview
- Business Strengths
- Website Observations
- Growth Opportunities
- AI Automation Suggestions
- Final Recommendations

---

## Bonus Features

- ✅ Google Sheets logging (works fully)
- ❌ Google Drive archiving (not completed — service accounts don't get Drive storage quota by default, which caused upload failures)

---

## Challenges

**Scraping blocks** – Some sites return 403 errors. Fixed by adding browser-like headers and handling failures gracefully so the rest of the pipeline still runs.

**AI provider issues** – Tried a few providers but ran into rate limits and deprecated models. Switched to Groq which was fast, free, and stable.

**Google Drive** – The code was written but the service account didn't have storage quota. Couldn't complete this bonus feature because of that Google Cloud limitation.

---

## What I'd improve with more time

- Better UI
- Retry logic for failed steps
- Live deployment
- Multi-page reports with charts

# SimplifIQ – AI-Powered Lead Automation System

SimplifIQ is a full-stack AI automation platform that streamlines the lead follow-up process for businesses.

When a user submits their company details through the form, the system automatically:

- Collects and validates lead information
- Scrapes publicly available company data
- Generates AI-powered business insights
- Creates a professional PDF audit report
- Sends the report through email
- Logs lead data into Google Sheets

This project was built as part of the **SimplifIQ AI Software Developer Intern Assessment**.

---

# Live Demo

Frontend:
```bash
https://your-vercel-link.vercel.app
```

Backend:
```bash
https://simplifiq-ai-automation.onrender.com
```

---

# Features

## AI Business Analysis
Uses Groq AI (Llama 3.3 70B) to generate personalized business insights and recommendations.

## Website Scraping
Extracts publicly available company information using Axios and Cheerio.

## Automated PDF Generation
Creates professional AI-generated audit reports using Puppeteer.

## Automated Email Delivery
Sends generated reports automatically using Brevo Email API.

## Google Sheets Logging
Stores all lead information inside Google Sheets as a live lead tracker.

## Fully Automated Workflow
Entire pipeline works automatically after form submission.

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express.js

## AI
- Groq API (Llama 3.3 70B)

## Scraping
- Axios
- Cheerio

## PDF Generation
- Puppeteer
- Chromium

## Email Service
- Brevo API

## Database / Logging
- Google Sheets API

---

# Project Workflow

```text
User Form Submission
        ↓
Website Scraping
        ↓
AI Insight Generation
        ↓
PDF Report Creation
        ↓
Email Delivery
        ↓
Google Sheets Logging
```

---

# Folder Structure

```text
simplifiq-assessment/
│
├── client/
│   ├── src/
│   └── public/
│
├── server/
│   ├── routes/
│   ├── services/
│   ├── templates/
│   ├── reports/
│   └── server.js
│
├── screenshots/
├── README.md
└── .gitignore
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone <your-repository-link>
cd simplifiq-assessment
```

---

## 2. Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

# Environment Variables

Create a `.env` file inside the `server/` folder.

```env
PORT=5000

GROQ_API_KEY=your_groq_api_key

BREVO_EMAIL=your_email@gmail.com
BREVO_SMTP_KEY=your_brevo_api_key

GOOGLE_CREDENTIALS={your_google_service_account_json}
```

---

# Run Locally

## Backend

```bash
cd server
npm run dev
```

## Frontend

```bash
cd client
npm run dev
```

---

# API Endpoint

## POST `/api/leads`

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Vercel",
  "website": "https://vercel.com"
}
```

After submission, the full automation workflow runs automatically.

---

# PDF Report Includes

- Company Overview
- Business Strengths
- Website Analysis
- Growth Opportunities
- AI Automation Suggestions
- Final Recommendations

---

# Deployment

## Frontend
- Vercel

## Backend
- Render

---

# Challenges Faced

## Website Scraping Restrictions
Some websites blocked scraping requests with 403 errors. This was handled by adding browser-like request headers and fallback handling.

## AI Provider Limitations
Multiple AI providers were tested before finalizing Groq due to better speed, free-tier availability, and stable responses.

## Puppeteer Deployment Issues
Cloud deployment environments required additional Chromium configuration for successful PDF generation.

## Email Delivery on Cloud
SMTP services caused timeout issues on cloud deployment, so the project was migrated to Brevo API-based email delivery.

---

# Future Improvements

- Better dashboard UI
- Retry mechanism for failed workflows
- Authentication system
- Database integration
- Analytics dashboard
- Multi-page reports with charts
- Docker deployment

---


# Author

Jayesh Parihar

Built for the SimplifIQ AI Software Developer Intern Assessment.
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const generateInsights = async (companyData) => {
  try {
    const prompt = `
You are a senior business consultant and AI automation strategist.

Analyze the company data and generate a professional business audit.

Return the response in this EXACT format:

COMPANY_OVERVIEW:
...

BUSINESS_STRENGTHS:
- point
- point

WEBSITE_OBSERVATIONS:
- point
- point

GROWTH_OPPORTUNITIES:
- point
- point

AI_AUTOMATION_SUGGESTIONS:
- point
- point

FINAL_RECOMMENDATIONS:
- point
- point

Company Data:
${JSON.stringify(companyData, null, 2)}

Keep response:
- professional
- concise
- practical
- executive-style
`;

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.log("Groq Error:", error);

    return "Failed to generate insights";
  }
};

export default generateInsights;
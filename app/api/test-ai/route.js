import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not set" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "What are the top 3 skills needed for a software developer in 2024?";
    const result = await model.generateContent(prompt);
    const response = result.response;
    
    return NextResponse.json({ 
      success: true, 
      response: response.text() 
    });
  } catch (error) {
    console.error("AI Test Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to test AI integration" },
      { status: 500 }
    );
  }
} 
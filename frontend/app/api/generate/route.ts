import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
    console.log("API ROUTE HIT");
  try {
    const { topic } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are an expert content creator.

Topic: ${topic}

Generate:

1. Viral Hook
2. YouTube Title
3. 150-word Script

Format:

HOOK:
...

TITLE:
...

SCRIPT:
...
`,
    });

    return NextResponse.json({
      result: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
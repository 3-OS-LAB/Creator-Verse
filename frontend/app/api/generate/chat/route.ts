
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
export async function POST(req: Request) {
  try {
    const { question } = await req.json();
const { data: memories } = await supabase
  .from("creator_memory")
  .select("title, content");

const memoryText =
  memories?.map(
    (m) =>
      `Title: ${m.title}\nContent: ${m.content}`
  ).join("\n\n") || "No memories found.";

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: `
Creator Memories:

${memoryText}

User Question:

${question}

Answer as a creator coach using the creator memories whenever relevant.
`,
});

    return NextResponse.json({
      answer: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Chat failed" },
      { status: 500 }
    );
  }
}

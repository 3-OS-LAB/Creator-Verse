
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

export async function POST() {
  try {
    const { data: dna } = await supabase
      .from("creator_analysis")
      .select("*")
      .single();

    const { data: memories } = await supabase
      .from("creator_memory")
      .select("title, content");

    const memoryText =
      memories?.map(
        (m) =>
          `Title: ${m.title}\nContent: ${m.content}`
      ).join("\n\n") || "";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are a content strategist.

Creator DNA:
Storytelling: ${dna?.storytelling}
Education: ${dna?.education}
Humor: ${dna?.humor}
Motivation: ${dna?.motivation}
Audience Engagement: ${dna?.audience_engagement}

Creator Memory:
${memoryText}

Generate:

1. 30-Day Content Plan
2. Weekly Themes
3. Reel Ideas
4. LinkedIn Post Ideas
5. YouTube Video Ideas
6. Best Posting Schedule
7. Growth Actions

Format clearly.
`,
    });

    return NextResponse.json({
      result: response.text,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}

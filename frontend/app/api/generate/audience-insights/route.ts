
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
        (m) => `Title: ${m.title}\nContent: ${m.content}`
      ).join("\n\n") || "";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Analyze this creator and predict their audience.

Creator DNA:
Storytelling: ${dna?.storytelling}
Education: ${dna?.education}
Humor: ${dna?.humor}
Motivation: ${dna?.motivation}
Audience Engagement: ${dna?.audience_engagement}

Creator Memories:
${memoryText}

Generate:

1. Audience Persona
2. Audience Interests
3. Best Content Types
4. Best Posting Times
5. Growth Opportunities
6. Content Ideas For Next 30 Days

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
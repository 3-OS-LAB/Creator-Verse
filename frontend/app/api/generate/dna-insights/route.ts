
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

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Analyze this creator.

Storytelling: ${dna?.storytelling}
Education: ${dna?.education}
Humor: ${dna?.humor}
Motivation: ${dna?.motivation}
Audience Engagement: ${dna?.audience_engagement}

Generate:

1. Top Strengths
2. Weakest Areas
3. Recommended Content Types
4. Growth Strategy
5. Next 30 Day Plan

Format clearly.
`,
    });

    return NextResponse.json({
      result: response.text,
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}


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
    const { topic } = await req.json();

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
    const creatorStyle = `
Storytelling: ${dna?.storytelling || 0}
Education: ${dna?.education || 0}
Humor: ${dna?.humor || 0}
Motivation: ${dna?.motivation || 0}
Audience Engagement: ${dna?.audience_engagement || 0}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are creating content for a creator.

Creator DNA:
${creatorStyle}

Creator Memories:
${memoryText}

Topic:
${topic}

Generate a viral Instagram Reel that matches this creator's style.

If storytelling is high:
- Use stories and examples.

If education is high:
- Teach concepts clearly.

If humor is high:
- Add humor and entertaining elements.

If motivation is high:
- Add inspiration and action-oriented language.

Generate:

1. Hook
2. 30-second Reel Script
3. Call To Action
4. 10 Hashtags

Format clearly.
`,
    });

    return NextResponse.json({
      result: response.text,
    });
  } catch (error) {
    console.error("FULL ERROR:", error);

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
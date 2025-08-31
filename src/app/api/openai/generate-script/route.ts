// src/app/api/openai/generate-script/route.ts

import { NextResponse } from "next/server";
import OpenAI from "openai";
import { VIDEO_TYPE_PRESETS } from "@/lib/constants/videoPresets";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    console.log("Received script generation request");
    const { videoTypeContext, videoDuration, userIdeaInput } =
      await request.json();

    if (!videoDuration || !userIdeaInput) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: videoDuration and userIdeaInput",
        },
        { status: 400 }
      );
    }

    const baseSystemPrompt =
      "You are a specialized video script writer that creates engaging, visually-driven content. Focus on creating scripts that are:\n" +
      "1. Visually descriptive and action-oriented\n" +
      "2. Structured with clear scene descriptions\n" +
      "3. Timed appropriately for video format\n" +
      "4. Easy to understand and visualize\n" +
      "Only describe visual elements; do not include voiceover narration.\n" +
      "Format your response as a proper video script with scene descriptions and timing.";

    const userPrompt = `VIDEO TYPE CONTEXT:\n${
      videoTypeContext || "Standard video format"
    }\n\nDURATION: ${videoDuration} seconds\n\nUSER'S IDEA:\n${userIdeaInput}\n\nPlease write a script that incorporates these elements while maintaining the style and constraints of the selected video type. The script should be optimized for a ${videoDuration}-second video.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: baseSystemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.4,
      max_tokens: 600, // Increased for longer scripts
    });

    const generatedScript = completion.choices[0].message.content;
    console.log("Generated script successfully:", {
      promptLength: userPrompt.length,
      responseLength: generatedScript?.length || 0,
      firstFewWords: generatedScript?.substring(0, 50) + "...",
    });

    return NextResponse.json({
      success: true,
      script: generatedScript,
      metadata: {
        model: "gpt-4o-mini",
        promptTokens: userPrompt.length / 4, // Rough estimation
        completionTokens: (generatedScript?.length || 0) / 4, // Rough estimation
      },
    });
  } catch (error) {
    console.error("Error in script generation:", error);
    // Log detailed error information
    const errorDetails =
      error instanceof Error
        ? {
            name: error.name,
            message: error.message,
            stack: error.stack,
          }
        : error;
    console.error("Detailed error:", errorDetails);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate script",
        details:
          process.env.NODE_ENV === "development" ? errorDetails : undefined,
      },
      { status: 500 }
    );
  }
}

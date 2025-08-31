import { generateVideo } from "../routes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("🔍 [VIDEO API] Received video generation request");

  try {
    // Verify API key is set
    if (!process.env.FAL_API) {
      console.error("❌ [VIDEO API] FAL_API environment variable not set");
      return NextResponse.json(
        { success: false, error: "API key not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log("📝 [VIDEO API] Request body received:", {
      ...body,
      prompt: body.prompt
        ? `"${body.prompt.substring(0, 100)}${
            body.prompt.length > 100 ? "..." : ""
          }"`
        : "undefined",
    });

    // Validate required fields
    if (!body.prompt) {
      console.error("❌ [VIDEO API] Validation failed: prompt is required");
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    console.log(
      "✅ [VIDEO API] Validation passed, forwarding to generateVideo"
    );
    return generateVideo(body);
  } catch (error) {
    console.error("💥 [VIDEO API] Error in video generation route:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}

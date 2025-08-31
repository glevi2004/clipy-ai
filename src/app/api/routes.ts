import { fal } from "@fal-ai/client";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Check if API key is available
if (!process.env.FAL_API) {
  throw new Error("FAL_API environment variable is not set");
}

// Configure fal client with API key
fal.config({
  credentials: process.env.FAL_API,
});

export type SeedanceInput = {
  prompt: string;
  aspect_ratio?: "21:9" | "16:9" | "4:3" | "1:1" | "3:4" | "9:16";
  resolution?: "480p" | "720p" | "1080p";
  duration?: "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  camera_fixed?: boolean;
  seed?: number;
  enable_safety_checker?: boolean;
};

export async function generateVideo(input: SeedanceInput) {
  console.log("🎥 [GENERATE VIDEO] Starting video generation process");
  console.log("📝 [GENERATE VIDEO] Input received:", {
    ...input,
    prompt: `"${input.prompt.substring(0, 150)}${
      input.prompt.length > 150 ? "..." : ""
    }"`,
  });

  try {
    // Set default values if not provided
    const videoParams = {
      prompt: input.prompt,
      aspect_ratio: input.aspect_ratio || "16:9",
      resolution: input.resolution || "1080p",
      duration: input.duration || "5",
      enable_safety_checker: input.enable_safety_checker ?? true,
      ...(input.camera_fixed !== undefined && {
        camera_fixed: input.camera_fixed,
      }),
      ...(input.seed !== undefined && { seed: input.seed }),
    };

    console.log("⚙️ [GENERATE VIDEO] Final video parameters:", {
      ...videoParams,
      prompt: `"${videoParams.prompt.substring(0, 150)}${
        videoParams.prompt.length > 150 ? "..." : ""
      }"`,
    });

    // Call the Seedance API
    console.log("🚀 [GENERATE VIDEO] Calling Seedance API...");
    const result = await fal.subscribe(
      "fal-ai/bytedance/seedance/v1/pro/text-to-video",
      {
        input: videoParams,
        logs: true,
        onQueueUpdate: (update) => {
          console.log(`🔄 [SEEDANCE API] Status: ${update.status}`);
          if (update.status === "IN_PROGRESS") {
            console.log("🔄 [SEEDANCE API] Generation progress:", update.logs);
          }
        },
      }
    );

    console.log("📊 [GENERATE VIDEO] Seedance API response received:", {
      success: !!result.data?.video?.url,
      hasVideo: !!result.data?.video,
      videoUrl: result.data?.video?.url ? "Present" : "Missing",
      seed: result.data?.seed,
    });

    if (!result.data?.video?.url) {
      console.error("❌ [GENERATE VIDEO] No video URL in Seedance response");
      throw new Error("No video URL in response");
    }

    // Download the video
    console.log(
      `📥 [GENERATE VIDEO] Downloading video from: ${result.data.video.url}`
    );
    const response = await fetch(result.data.video.url);
    if (!response.ok) {
      console.error(
        `❌ [GENERATE VIDEO] Failed to download video: ${response.status} ${response.statusText}`
      );
      throw new Error(`Failed to download video: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    console.log(
      `💾 [GENERATE VIDEO] Video downloaded, size: ${buffer.byteLength} bytes`
    );

    // Create a unique filename using timestamp and seed
    const timestamp = Date.now();
    const seed = result.data.seed;
    const filename = `video_${timestamp}_${seed}.mp4`;
    console.log(`📝 [GENERATE VIDEO] Generated filename: ${filename}`);

    // Ensure the videos directory exists in public folder
    const videosDir = path.join(process.cwd(), "public", "videos");
    if (!fs.existsSync(videosDir)) {
      console.log(
        `📁 [GENERATE VIDEO] Creating videos directory: ${videosDir}`
      );
      fs.mkdirSync(videosDir, { recursive: true });
    }

    // Save the video file
    const filePath = path.join(videosDir, filename);
    console.log(`💾 [GENERATE VIDEO] Saving video to: ${filePath}`);
    fs.writeFileSync(filePath, Buffer.from(buffer));
    console.log(`✅ [GENERATE VIDEO] Video saved successfully`);

    const responseData = {
      success: true,
      data: {
        videoUrl: `/videos/${filename}`,
        seed: result.data.seed,
      },
    };

    console.log(
      "✅ [GENERATE VIDEO] Process completed successfully:",
      responseData
    );
    return NextResponse.json(responseData);
  } catch (error) {
    console.error("💥 [GENERATE VIDEO] Error during video generation:", error);
    console.error(
      "💥 [GENERATE VIDEO] Error stack:",
      error instanceof Error ? error.stack : "No stack trace"
    );
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

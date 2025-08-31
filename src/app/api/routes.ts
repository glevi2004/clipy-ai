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

    // Call the Seedance API
    const result = await fal.subscribe(
      "fal-ai/bytedance/seedance/v1/pro/text-to-video",
      {
        input: videoParams,
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            console.log("Generation progress:", update.logs);
          }
        },
      }
    );

    if (!result.data?.video?.url) {
      throw new Error("No video URL in response");
    }

    // Download the video
    const response = await fetch(result.data.video.url);
    if (!response.ok) {
      throw new Error(`Failed to download video: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();

    // Create a unique filename using timestamp and seed
    const timestamp = Date.now();
    const seed = result.data.seed;
    const filename = `video_${timestamp}_${seed}.mp4`;

    // Ensure the videos directory exists in public folder
    const videosDir = path.join(process.cwd(), "public", "videos");
    if (!fs.existsSync(videosDir)) {
      fs.mkdirSync(videosDir, { recursive: true });
    }

    // Save the video file
    const filePath = path.join(videosDir, filename);
    fs.writeFileSync(filePath, Buffer.from(buffer));

    return NextResponse.json({
      success: true,
      data: {
        videoUrl: `/videos/${filename}`,
        seed: result.data.seed,
      },
    });
  } catch (error) {
    console.error("Error generating video:", error);
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

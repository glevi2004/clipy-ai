// src/services/ai/aiScriptWriterService.tsx

import { VIDEO_TYPE_PRESETS } from "@/lib/constants/videoPresets";

interface AIScriptWriterParams {
  videoType: string;
  videoDuration: string;
  userIdeaInput: string;
}

export class AIScriptWriterService {
  static async generateScript(params: AIScriptWriterParams): Promise<string> {
    const { videoType, videoDuration, userIdeaInput } = params;
    const videoTypeContext =
      VIDEO_TYPE_PRESETS[videoType]?.prompt || "Standard video format";

    try {
      // Integrate with OpenAI:
      const response = await fetch("/api/openai/generate-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoTypeContext,
          videoDuration,
          userIdeaInput,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("API Error Response:", {
          status: response.status,
          statusText: response.statusText,
          errorData,
        });
        throw new Error(
          errorData?.error ||
            `Failed to generate script (HTTP ${response.status})`
        );
      }

      const data = await response.json();
      return data.script;
    } catch (error) {
      console.error("Error generating script:", error);
      throw error;
    }
  }
}

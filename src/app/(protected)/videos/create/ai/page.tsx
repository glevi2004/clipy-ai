"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { VIDEO_TYPE_PRESETS } from "@/lib/constants/videoPrompts";

export default function CreateAIVideoPage() {
  const [formData, setFormData] = useState({
    script: "",
    video_type: "asmr",
    aspect_ratio: "16:9",
    resolution: "1080p",
    duration: "5",
    camera_fixed: true,
    seed: 42,
    enable_safety_checker: true,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    data?: { videoUrl: string };
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      console.log("🎬 Starting video generation process...");
      console.log("📝 Form data:", formData);

      const typePrompt = VIDEO_TYPE_PRESETS[formData.video_type] || "";
      console.log(`🎯 Selected video type: ${formData.video_type}`);
      console.log(`📋 Type prompt: "${typePrompt}"`);
      console.log(`✍️ User script: "${formData.script}"`);

      const composedPrompt = `${typePrompt}\n\n${formData.script}`.trim();
      console.log(`🔗 Final composed prompt: "${composedPrompt}"`);

      const { video_type, script, ...rest } = formData as any;
      const payload = { ...rest, prompt: composedPrompt };
      console.log("📦 API payload:", payload);

      console.log("🚀 Sending request to /api/video...");
      const response = await fetch("/api/video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log(`📡 API response status: ${response.status}`);
      const data = await response.json();
      console.log("📊 API response data:", data);

      if (data.success) {
        console.log("✅ Video generation successful!");
        console.log(`🎥 Video URL: ${data.data?.videoUrl}`);
      } else {
        console.error("❌ Video generation failed:", data.error);
      }

      setResult(data);
    } catch (error) {
      console.error("💥 Frontend error during video generation:", error);
      setResult({
        success: false,
        error: "Failed to generate video",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Generate AI Video
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Video Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Video Type
            </label>
            <select
              name="video_type"
              value={formData.video_type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm focus:ring-[#F2C94C] focus:border-[#F2C94C] bg-gray-50 dark:bg-[#15171a] text-gray-900 dark:text-white"
            >
              <option value="asmr">ASMR</option>
              <option value="pov">POV</option>
            </select>
          </div>

          {/* Script */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Script
            </label>
            <textarea
              name="script"
              value={formData.script}
              onChange={handleInputChange}
              className="w-full h-32 px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm focus:ring-[#F2C94C] focus:border-[#F2C94C] bg-gray-50 dark:bg-[#15171a] text-gray-900 dark:text-white"
              placeholder="Write your script..."
              required
            />
          </div>

          {/* Aspect Ratio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Aspect Ratio
            </label>
            <select
              name="aspect_ratio"
              value={formData.aspect_ratio}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm focus:ring-[#F2C94C] focus:border-[#F2C94C] bg-gray-50 dark:bg-[#15171a] text-gray-900 dark:text-white"
            >
              <option value="16:9">16:9</option>
              <option value="21:9">21:9</option>
              <option value="4:3">4:3</option>
              <option value="1:1">1:1</option>
              <option value="3:4">3:4</option>
              <option value="9:16">9:16</option>
            </select>
          </div>

          {/* Resolution */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Resolution
            </label>
            <select
              name="resolution"
              value={formData.resolution}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm focus:ring-[#F2C94C] focus:border-[#F2C94C] bg-gray-50 dark:bg-[#15171a] text-gray-900 dark:text-white"
            >
              <option value="480p">480p</option>
              <option value="720p">720p</option>
              <option value="1080p">1080p</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Duration (seconds)
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm focus:ring-[#F2C94C] focus:border-[#F2C94C] bg-gray-50 dark:bg-[#15171a] text-gray-900 dark:text-white"
            >
              {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <option key={num} value={String(num)}>
                  {num}s
                </option>
              ))}
            </select>
          </div>

          {/* Camera Fixed */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="camera_fixed"
              checked={formData.camera_fixed}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  camera_fixed: e.target.checked,
                }))
              }
              className="h-4 w-4 text-[#F2C94C] focus:ring-[#F2C94C] border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] rounded"
            />
            <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Fixed Camera
            </label>
          </div>

          {/* Seed */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Seed
            </label>
            <input
              type="number"
              name="seed"
              value={formData.seed}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm focus:ring-[#F2C94C] focus:border-[#F2C94C] bg-gray-50 dark:bg-[#15171a] text-gray-900 dark:text-white"
            />
          </div>

          {/* Safety Checker */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="enable_safety_checker"
              checked={formData.enable_safety_checker}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  enable_safety_checker: e.target.checked,
                }))
              }
              className="h-4 w-4 text-[#F2C94C] focus:ring-[#F2C94C] border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] rounded"
            />
            <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Enable Safety Checker
            </label>
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Generating..." : "Generate Video"}
          </Button>
        </form>

        {/* Result Display */}
        {result && (
          <div className="mt-8">
            {result.success ? (
              <div className="rounded-lg overflow-hidden">
                <video src={result.data?.videoUrl} controls className="w-full">
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="text-red-500 text-center">{result.error}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// src/components/protected/AIWriterModal.tsx
"use client";

import { Dialog, DialogContent, DialogTitle, DialogClose } from "../ui/dialog";
import { VisuallyHidden } from "../ui/visually-hidden";
import { Button } from "../ui/button";
import { Sparkles, X, Send } from "lucide-react";
import { useState } from "react";
import { AIScriptWriterService } from "@/services/ai/aiScriptWriterService";

interface AIWriterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScriptGenerated: (script: string) => void;
  videoType?: string;
  videoDuration?: string;
}

export function AIWriterModal({
  isOpen,
  onClose,
  onScriptGenerated,
  videoType = "asmr",
  videoDuration = "30",
}: AIWriterModalProps) {
  const [prompt, setPrompt] = useState("");
  const [generatedScript, setGeneratedScript] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateScript = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    try {
      console.log("Generating script with prompt:", prompt);

      const script = await AIScriptWriterService.generateScript({
        videoType,
        videoDuration,
        userIdeaInput: prompt,
      });

      console.log("Generated script:", script);
      setGeneratedScript(script);
    } catch (error) {
      console.error("Error generating script:", error);
      // You could add a toast notification here
      setGeneratedScript("Failed to generate script. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUseScript = () => {
    onScriptGenerated(generatedScript);
    onClose();
    setPrompt("");
    setGeneratedScript("");
  };

  const handleClose = () => {
    onClose();
    setPrompt("");
    setGeneratedScript("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 bg-white dark:bg-black border-gray-200 dark:border-gray-800">
        <DialogTitle asChild>
          <VisuallyHidden>AI Script Writer</VisuallyHidden>
        </DialogTitle>

        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 dark:ring-offset-gray-950 dark:focus:ring-gray-800 dark:data-[state=open]:bg-gray-800">
          <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#F2C94C] rounded-lg p-2">
              <Sparkles className="h-5 w-5 text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                AI Script Writer
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Generate engaging scripts with AI
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Prompt Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Describe your video idea
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create a 30-second video about the benefits of meditation for beginners..."
                className="w-full h-24 px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm focus:ring-[#F2C94C] focus:border-[#F2C94C] bg-gray-50 dark:bg-[#15171a] text-gray-900 dark:text-white resize-none"
              />
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerateScript}
              disabled={!prompt.trim() || isGenerating}
              className="w-full bg-[#F2C94C] hover:bg-[#F2C94C]/80 text-black"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Script
                </>
              )}
            </Button>

            {/* Generated Script */}
            {generatedScript && (
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Generated Script
                </label>
                <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] p-4">
                  <textarea
                    value={generatedScript}
                    onChange={(e) => setGeneratedScript(e.target.value)}
                    className="w-full h-32 px-0 py-0 border-none bg-transparent text-gray-900 dark:text-white resize-none focus:outline-none"
                    placeholder="Generated script will appear here..."
                  />
                </div>
                <Button
                  onClick={handleUseScript}
                  className="w-full bg-[#5200FF] hover:bg-[#5200FF]/80 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Use This Script
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

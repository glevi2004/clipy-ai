"use client";

import { Dialog, DialogContent, DialogTitle, DialogClose } from "../ui/dialog";
import { VisuallyHidden } from "../ui/visually-hidden";
import { Button } from "../ui/button";
import { Sparkles, FileVideo, X } from "lucide-react";
import Image from "next/image";

interface CreateVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateWithAI: () => void;
  onCreateBlank: () => void;
}

export function CreateVideoModal({
  isOpen,
  onClose,
  onCreateWithAI,
  onCreateBlank,
}: CreateVideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0 bg-white dark:bg-black border-gray-200 dark:border-gray-800">
        <DialogTitle asChild>
          <VisuallyHidden>Create New Video</VisuallyHidden>
        </DialogTitle>

        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 dark:ring-offset-gray-950 dark:focus:ring-gray-800 dark:data-[state=open]:bg-gray-800">
          <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-800">
          {/* Generate with AI */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#F2C94C] rounded-lg p-2">
                <Sparkles className="h-5 w-5 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Generate with AI
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Let AI generate everything else in seconds.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Generate a script with AI or use your own, then generate a video
              in seconds.
            </p>

            <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden mb-4">
              <Image
                src="/images/ai-generation-preview.png"
                alt="AI Generation Preview"
                width={400}
                height={250}
                className="w-full"
              />
            </div>

            <Button
              onClick={onCreateWithAI}
              className="w-full bg-[#F2C94C] hover:bg-[#F2C94C]/80 text-black"
            >
              Create with AI
            </Button>
          </div>

          {/* Create Blank Video */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-2">
                <FileVideo className="h-5 w-5 text-gray-100" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Create Blank Video
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Alternatively start from scratch
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Create a blank video and create sequences one by one.
            </p>

            <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden mb-4">
              <Image
                src="/images/blank-video-preview.png"
                alt="Blank Video Preview"
                width={400}
                height={250}
                className="w-full"
              />
            </div>

            <Button
              onClick={onCreateBlank}
              variant="outline"
              className="w-full"
            >
              Create Blank Video
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Camera,
  Gamepad,
  ShoppingBag,
  Brain,
  Eye,
  Sparkles,
  Play,
  Image as ImageIcon,
  ChevronDown,
  Music,
  Mic,
  Users,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const videoTypes = [
  { id: "faceless", label: "Faceless Video", icon: Camera, active: true },
  { id: "ugc", label: "UGC Video", icon: Users },
  { id: "gameplay", label: "Gameplay Video", icon: Gamepad },
  { id: "ugc-ads", label: "UGC Ads", icon: ShoppingBag },
  { id: "italian", label: "Italian Brainrot", icon: Brain },
  { id: "pov", label: "POV Video", icon: Eye },
];

const presets = [
  { id: "4k", name: "4k realistic", image: "/media-types/realistic.png" },
];

const musicTracks = [
  { id: "blade", name: "Bladerunner 2049", type: "Futuristic, popular" },
  { id: "snowfall", name: "Snowfall", type: "Calm, Tiktok, Popular" },
  { id: "love", name: "Another love", type: "Romantic, Calm" },
  { id: "paris", name: "Else - Paris", type: "Suspense, Epic" },
];

const voices = [
  { id: "alloy", name: "Alloy", type: "OpenAI Voice" },
  { id: "echo", name: "Echo", type: "OpenAI Voice", selected: true },
  { id: "fable", name: "Fable", type: "OpenAI Voice" },
];

export default function CreateAIVideoPage() {
  const [selectedVideoType, setSelectedVideoType] = useState("faceless");
  const [script, setScript] = useState("");
  const [selectedPreset, setSelectedPreset] = useState("");

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <h1 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
        Create a new video
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Select a tool and pick your options to create your video
      </p>

      {/* Video Type Selection */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
        {videoTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedVideoType(type.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap",
              "text-sm font-medium transition-colors",
              selectedVideoType === type.id
                ? "bg-indigo-600 text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            )}
          >
            <type.icon className="w-4 h-4" />
            {type.label}
          </button>
        ))}
      </div>

      {/* Script Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Script
            </h2>
            <button className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Script Info</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <Button variant="outline" className="gap-2">
            <Sparkles className="w-4 h-4" />
            AI script writer
          </Button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Enter your video script or use AI to generate one
        </p>
        <div className="relative">
          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            className="w-full h-48 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your video script here..."
          />
          <div className="absolute bottom-4 right-4 text-sm text-gray-400">
            {script.length}/1200
          </div>
        </div>
      </div>

      {/* Media Type Selection */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Choose media type
          </h2>
          <Button variant="outline" className="gap-2">
            <ImageIcon className="w-4 h-4" />
            AI Images
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Select what type of media will be used to illustrate your video
        </p>
      </div>

      {/* Generation Presets */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Choose a generation preset
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setSelectedPreset(preset.id)}
              className={cn(
                "relative rounded-lg overflow-hidden aspect-[4/3] group",
                selectedPreset === preset.id && "ring-2 ring-indigo-500"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src={preset.image}
                alt={preset.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 z-20">
                <p className="text-sm font-medium text-white">{preset.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* AI Model Selection */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Choose AI model
            </h2>
            <button className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">AI Model Info</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <Button variant="outline" className="gap-2">
            Basic
            <span className="text-xs text-gray-500">1 credit per image</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Background Music */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Choose background music
          </h2>
          <Button variant="outline" className="gap-2">
            <Music className="w-4 h-4" />
            Music Library
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Select or generate the perfect music for your video
        </p>
        <div className="space-y-3">
          {musicTracks.map((track) => (
            <div
              key={track.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {track.name}
                </h3>
                <p className="text-sm text-gray-500">{track.type}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Play className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4" variant="outline">
          Show More
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Voice Selection */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Voice Selection
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Mic className="w-4 h-4" />
              Voices
            </Button>
            <Button variant="outline" className="gap-2">
              <Users className="w-4 h-4" />
              Clone
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Choose or clone a voice for your content
        </p>
        <div className="space-y-3">
          {voices.map((voice) => (
            <div
              key={voice.id}
              className={cn(
                "flex items-center justify-between p-4 rounded-lg border",
                voice.selected
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950"
                  : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {voice.name}
                  </h3>
                  <p className="text-sm text-gray-500">{voice.type}</p>
                </div>
              </div>
              <Button variant="ghost">
                {voice.selected ? "Selected" : "Select"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

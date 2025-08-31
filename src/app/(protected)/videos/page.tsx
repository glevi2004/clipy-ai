"use client";

import { useState, useEffect } from "react";
import {
  VideoStorageService,
  VideoMetadata,
} from "@/firebase/services/videoStorageService";
import { useAuth } from "@/contexts/authContext";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Clock, Ratio, Monitor, Trash2 } from "lucide-react";
import { Loading } from "@/components/ui/loading";

export default function VideosPage() {
  const { user } = useAuth();
  const [videos, setVideos] = useState<VideoMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingVideoId, setDeletingVideoId] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const userVideos = await VideoStorageService.getUserVideos(user);
        setVideos(userVideos);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load your videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [user]);

  const formatFileSize = (bytes: number): string => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  const formatDate = (timestamp: any): string => {
    if (!timestamp) return "Unknown";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  const handleDeleteVideo = async (videoId: string, storagePath: string) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this video? This action cannot be undone."
      )
    ) {
      return;
    }

    setDeletingVideoId(videoId);
    try {
      await VideoStorageService.deleteVideo(videoId, storagePath);
      setVideos(videos.filter((video) => video.id !== videoId));
    } catch (error) {
      console.error("Error deleting video:", error);
      alert("Failed to delete video. Please try again.");
    } finally {
      setDeletingVideoId(null);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="h-64">
          <Loading size="lg" text="Loading your videos..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8">
        <div className="rounded-lg border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20 p-8 text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
            Error Loading Videos
          </h1>
          <p className="text-red-500 dark:text-red-300">{error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto p-8">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] p-8 text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Please Sign In
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            You need to be signed in to view your videos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Videos
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {videos.length} video{videos.length !== 1 ? "s" : ""} in your library
        </p>
      </div>

      {videos.length === 0 ? (
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] p-8 text-center">
          <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            No Videos Yet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create your first AI video to see it here.
          </p>
          <Button
            onClick={() => (window.location.href = "/videos/create/ai")}
            className="bg-[#F2C94C] hover:bg-[#F2C94C]/80 text-black"
          >
            Create Video
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Video Preview */}
              <div className="aspect-video bg-gray-200 dark:bg-[#27282B]">
                <video
                  src={video.firebaseStorageUrl}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F2C94C] text-black">
                    {video.videoType.toUpperCase()}
                  </span>
                  <Button
                    onClick={() =>
                      video.id &&
                      handleDeleteVideo(video.id, video.firebaseStoragePath)
                    }
                    disabled={deletingVideoId === video.id}
                    size="sm"
                    variant="ghost"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 p-1"
                  >
                    {deletingVideoId === video.id ? (
                      <Loading size="sm" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <h3 className="font-medium text-gray-900 dark:text-white mb-2 truncate">
                  {video.title}
                </h3>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Ratio className="h-4 w-4" />
                    <span>{video.aspectRatio}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4" />
                    <span>{video.resolution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{video.duration}s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(video.createdAt)}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatFileSize(video.fileSize)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

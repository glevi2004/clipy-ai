"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CreateVideoModal } from "@/components/protected/CreateVideoModal";
import {
  VideoStorageService,
  VideoMetadata,
} from "@/firebase/services/videoStorageService";
import { useAuth } from "@/contexts/authContext";
import { Loading } from "@/components/ui/loading";

export default function DashboardPage() {
  const { user } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [recentVideos, setRecentVideos] = useState<VideoMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleCreateWithAI = () => {
    setIsCreateModalOpen(false);
    router.push("/videos/create/ai");
  };

  const handleCreateBlank = () => {
    setIsCreateModalOpen(false);
    router.push("/videos/create/blank");
  };

  useEffect(() => {
    const fetchRecentVideos = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const userVideos = await VideoStorageService.getUserVideos(user);
        // Get only the 4 most recent videos for the dashboard
        setRecentVideos(userVideos.slice(0, 4));
      } catch (error) {
        console.error("Error fetching recent videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentVideos();
  }, [user]);

  const formatDate = (timestamp: any): string => {
    if (!timestamp) return "Unknown";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30)
      return `${Math.floor(diffDays / 7)} week${
        Math.floor(diffDays / 7) > 1 ? "s" : ""
      } ago`;
    return date.toLocaleDateString();
  };

  return (
    <>
      <div className="container mx-auto px-4 space-y-10">
        {/* Welcome */}
        <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center md:min-h-[260px]">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Welcome to Clipy AI 👋
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-prose">
              Create faceless videos on Auto-Pilot for any purpose using AI, in
              seconds.
            </p>
            <div className="flex gap-3">
              <Button
                className="bg-[#F2C94C] text-black hover:bg-[#F2C94C]/80"
                onClick={() => setIsCreateModalOpen(true)}
              >
                Create New Video
              </Button>
              <Link href="#">
                <Button variant="outline">Tutorials</Button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full h-56 md:h-72 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
                alt="Preview"
                fill
                className="object-cover"
                unoptimized
              />
              <span className="absolute bottom-2 left-2 text-xs bg-black/70 text-white rounded px-2 py-0.5">
                Every rustle
              </span>
            </div>
          </div>
        </section>

        {/* Recent videos */}
        <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-black/30">
          <div className="flex items-center justify-between p-4">
            <div className="text-sm font-semibold">Recent videos</div>
            <Link
              href="/videos"
              className="text-xs text-gray-500 hover:underline"
            >
              View all
            </Link>
          </div>
          {recentVideos.length === 0 ? (
            <div className="flex items-center justify-center py-16 text-center">
              <div>
                <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
                  <Play className="size-5 text-gray-500" />
                </div>
                <div className="font-medium">No video found</div>
                <p className="text-xs text-gray-500">
                  You didn&apos;t create any video yet.
                </p>
              </div>
            </div>
          ) : loading ? (
            <div className="py-16">
              <Loading size="lg" text="Loading recent videos..." />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              {recentVideos.map((video) => (
                <div
                  key={video.id}
                  className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => router.push("/videos")}
                >
                  <div className="relative h-44 md:h-52 bg-gray-200 dark:bg-[#27282B]">
                    <video
                      src={video.firebaseStorageUrl}
                      className="w-full h-full object-cover"
                      preload="metadata"
                      muted
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="size-8 text-white" />
                    </div>
                    <span className="absolute bottom-2 left-2 text-xs bg-black/70 text-white rounded px-2 py-0.5">
                      {video.videoType.toUpperCase()}
                    </span>
                    <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white rounded px-2 py-0.5">
                      {video.duration}s
                    </span>
                  </div>
                  <div className="p-3">
                    <div className="font-medium truncate">{video.title}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <Clock className="size-3" />
                      <span>{formatDate(video.createdAt)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Tutorials */}
        <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-black/30 p-4 space-y-3">
          <div className="text-sm font-semibold">Tutorials</div>
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute left-0 top-0 h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/2ePf9rue1Ao"
              title="How To Make Faceless Videos Using AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      </div>

      <CreateVideoModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateWithAI={handleCreateWithAI}
        onCreateBlank={handleCreateBlank}
      />
    </>
  );
}

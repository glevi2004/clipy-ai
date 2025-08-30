import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";

const recentVideos = [
  {
    id: "1",
    title: "Morning Walk ASMR",
    createdAt: "2 days ago",
    thumbnail:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Space Facts: Jupiter",
    createdAt: "3 days ago",
    thumbnail:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Top 5 Productivity Tips",
    createdAt: "5 days ago",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "AI News Weekly",
    createdAt: "1 week ago",
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 space-y-10">
      {/* Welcome */}
      <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Welcome to Clipy AI 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-prose">
            Create faceless videos on Auto-Pilot for any purpose using AI, in
            seconds.
          </p>
          <div className="flex gap-3">
            <Link href="#">
              <Button className="bg-[#F2C94C] text-black hover:bg-[#F2C94C]/80">
                Create New Video
              </Button>
            </Link>
            <Link href="#">
              <Button variant="outline">Tutorials</Button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="relative w-full h-40 md:h-56 overflow-hidden rounded-lg">
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
          <Link href="#" className="text-xs text-gray-500 hover:underline">
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {recentVideos.map((v) => (
              <div
                key={v.id}
                className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800"
              >
                <div className="relative h-36">
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-3">
                  <div className="font-medium truncate">{v.title}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Clock className="size-3" />
                    <span>{v.createdAt}</span>
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
  );
}

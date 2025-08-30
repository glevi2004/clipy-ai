import {
  Wand2,
  GaugeCircle,
  Layers,
  PlayCircle,
  Zap,
  Sparkles,
} from "lucide-react";

export function Features() {
  return (
    <section id="features" className="mt-32">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to create viral videos
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Powerful features to help you create, edit, and share your videos
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-900/70 transition-all duration-200 shadow-sm hover:shadow-md">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#F2C94C]/20 text-[#F2C94C]">
        {icon}
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

const FEATURES = [
  {
    icon: <Wand2 className="size-5" />,
    title: "Text-to-video magic",
    description:
      "Describe your clip and let our AI generate scenes, subtitles, and cuts.",
  },
  {
    icon: <GaugeCircle className="size-5" />,
    title: "Fast and scalable",
    description: "Export in seconds with cloud rendering optimized for speed.",
  },
  {
    icon: <Layers className="size-5" />,
    title: "On-brand templates",
    description:
      "Apply fonts, colors, and layouts to stay consistent across platforms.",
  },
  {
    icon: <PlayCircle className="size-5" />,
    title: "Smart captions",
    description:
      "Auto-captions with highlights, emojis, and progress bars built-in.",
  },
  {
    icon: <Zap className="size-5" />,
    title: "Auto reframing",
    description: "One click to adapt for TikTok, Reels, Shorts, and YouTube.",
  },
  {
    icon: <Sparkles className="size-5" />,
    title: "Stock + voiceover",
    description:
      "Generate voiceovers and add stock footage without leaving Clipy.",
  },
];

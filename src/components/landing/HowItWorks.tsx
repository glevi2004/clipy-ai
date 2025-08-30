import { PlayCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mt-32 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Go from idea to viral video in three simple steps
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left side: Steps */}
          <div className="space-y-8">
            {STEPS.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>

          {/* Right side: Preview */}
          <div className="relative mt-10 lg:mt-0">
            <div className="rounded-2xl overflow-hidden bg-gray-800 aspect-[9/16] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C] flex items-center justify-center">
                  <PlayCircle className="w-8 h-8 text-black" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="space-y-4">
                  <div className="h-2 bg-[#F2C94C] rounded-full w-3/4" />
                  <div className="h-2 bg-[#F2C94C]/50 rounded-full w-1/2" />
                  <div className="h-2 bg-[#F2C94C]/30 rounded-full w-1/4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function StepCard({ number, title, children }: StepCardProps) {
  return (
    <div className="rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white/80 dark:bg-gray-900/50 hover:bg-white/90 dark:hover:bg-gray-900/70 transition-all duration-200 shadow-sm hover:shadow-md">
      <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F2C94C] text-black text-xs font-semibold shadow-sm">
        {number}
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

const STEPS = [
  {
    number: "1",
    title: "Write your script",
    children:
      "Use our AI-powered script generator or paste your own script. Add background music and choose a voice.",
  },
  {
    number: "2",
    title: "Generate your video",
    children:
      "Our AI creates scenes, captions, cuts, and animations automatically. Preview and adjust as needed.",
  },
  {
    number: "3",
    title: "Share everywhere",
    children:
      "Export in multiple formats and share directly to TikTok, YouTube Shorts, and Instagram Reels.",
  },
];

import { PlayCircle } from "lucide-react";

export function AICapabilities() {
  return (
    <section className="mt-32 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Create unique videos for every niche
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            From script writing to video generation, Clipy can create any style
            of video in seconds.
          </p>
        </div>

        {/* Bottom Grid */}
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="rounded-[32px] overflow-hidden bg-[#1a1d21] aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white font-semibold text-[28px]">
                The story of Cleopatra
              </h3>
              <div className="mt-3 bg-[#ffffff1a] backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full inline-block">
                Historical
              </div>
            </div>
          </div>

          <div className="rounded-[32px] overflow-hidden bg-[#1a1d21] aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white font-semibold text-[28px]">
                Apollo 11 Moon Landing
              </h3>
              <div className="mt-3 bg-[#ffffff1a] backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full inline-block">
                Space
              </div>
            </div>
          </div>

          <div className="rounded-[32px] overflow-hidden bg-[#1a1d21] aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white font-semibold text-[28px]">
                Japanese Ink Style
              </h3>
              <div className="mt-3 bg-[#ffffff1a] backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full inline-block">
                Art
              </div>
            </div>
          </div>
        </div>

        {/* Voice Generation Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Professional AI Voiceovers
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Choose from a variety of natural-sounding voices for your videos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {VOICES.map((voice) => (
              <VoiceCard key={voice.name} {...voice} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface VoiceCardProps {
  name: string;
  description: string;
}

function VoiceCard({ name, description }: VoiceCardProps) {
  return (
    <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-full bg-[#F2C94C] mb-3 flex items-center justify-center">
        <PlayCircle className="w-6 h-6 text-black" />
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

const VOICES = [
  { name: "Adam", description: "Male, Professional" },
  { name: "Sarah", description: "Female, Friendly" },
  { name: "Michael", description: "Male, Energetic" },
  { name: "Emma", description: "Female, Natural" },
  { name: "David", description: "Male, Dramatic" },
];

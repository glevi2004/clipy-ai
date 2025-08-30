import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* GPT Badge */}
      <div className="absolute top-0 left-0 z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#F2C94C]/20 px-4 py-2 text-sm bg-[#1a1d21] text-[#F2C94C]">
          <div className="w-4 h-4 rounded-full bg-[#F2C94C]/20 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-[#F2C94C]" />
          </div>
          <span>Powered by GPT-4.5</span>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute right-0 top-20 flex gap-4">
        <div className="w-64 h-[420px] rounded-[32px] overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 rotate-6 cursor-pointer transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 ease-in-out group relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          <div className="absolute bottom-6 left-6">
            <div className="bg-black/40 text-white text-xs px-2 py-1 rounded-md inline-block">
              WAS A
            </div>
            <h3 className="text-white text-lg mt-2">The Cleopatre Effect</h3>
          </div>
        </div>
        <div className="w-64 h-[420px] rounded-[32px] overflow-hidden bg-gradient-to-br from-green-600 to-green-800 -rotate-3 cursor-pointer transform hover:-translate-y-8 hover:shadow-2xl transition-all duration-500 ease-in-out group relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          <div className="absolute bottom-6 left-6">
            <div className="bg-[#1DB954]/40 text-[#1DB954] text-xs px-2 py-1 rounded-md inline-block">
              silence
            </div>
            <h3 className="text-white text-lg mt-2">
              The sadest story on Everest
            </h3>
          </div>
        </div>
        <div className="w-64 h-[420px] rounded-[32px] overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rotate-12 cursor-pointer transform hover:-translate-y-8 hover:shadow-2xl transition-all duration-500 ease-in-out group relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          <div className="absolute bottom-6 left-6">
            <div className="bg-white/40 text-white text-xs px-2 py-1 rounded-md inline-block">
              One GIANT
            </div>
            <h3 className="text-white text-lg mt-2">
              The day Apollo 11 landed on moon
            </h3>
          </div>
        </div>
      </div>

      <div className="max-w-3xl">
        <h1 className="text-6xl font-bold tracking-tight text-white max-w-md">
          Create <span className="text-[#F2C94C]">viral</span>
          <br />
          <span className="text-[#F2C94C]">faceless videos</span>
          <br />
          on Auto-Pilot.
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-md">
          Create AI Videos in minutes. Our AI creation tool creates viral AI
          videos for you.
        </p>
        <div className="mt-10">
          <Link href="/register">
            <Button
              size="lg"
              className="h-14 px-8 bg-[#F2C94C] text-black hover:bg-[#F2C94C]/80 rounded-full text-base font-medium"
            >
              Get Started →
            </Button>
          </Link>
        </div>

        {/* Trust Badge */}
        <div className="mt-20">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black"
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-[#F2C94C]">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-400">Trusted by 27,000+ creators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Check,
  GaugeCircle,
  Layers,
  PlayCircle,
  Sparkles,
  Wand2,
  Zap,
  Video,
} from "lucide-react";

export default function Home() {
  return (
    <div className="py-10 sm:py-16">
      {/* Hero */}
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
        <div className="absolute right-0 top-20 -z-10 flex gap-4 animate-float">
          <div className="w-64 h-[420px] rounded-[32px] overflow-hidden bg-[#1a1d21] rotate-6 transform hover:rotate-0 transition-transform">
            <Image
              src="/images/cleopatra.jpg"
              alt="Cleopatra"
              width={400}
              height={600}
              className="w-full h-full object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
            <div className="absolute bottom-6 left-6">
              <div className="bg-black/40 text-white text-xs px-2 py-1 rounded-md inline-block">
                WAS A
              </div>
              <h3 className="text-white text-lg mt-2">The Cleopatre Effect</h3>
            </div>
          </div>
          <div className="w-64 h-[420px] rounded-[32px] overflow-hidden bg-[#1a1d21] -rotate-3 transform hover:rotate-0 transition-transform">
            <Image
              src="/images/everest.jpg"
              alt="Everest"
              width={400}
              height={600}
              className="w-full h-full object-cover"
              priority
              quality={100}
            />
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
          <div className="w-64 h-[420px] rounded-[32px] overflow-hidden bg-[#1a1d21] rotate-12 transform hover:rotate-0 transition-transform">
            <Image
              src="/images/apollo.jpg"
              alt="Apollo"
              width={400}
              height={600}
              className="w-full h-full object-cover"
              priority
              quality={100}
            />
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
          <h1 className="text-6xl font-bold tracking-tight text-white">
            Create <span className="text-[#F2C94C]">viral</span>
            <br />
            <span className="text-[#F2C94C]">faceless videos</span>
            <br />
            on Auto-Pilot.
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            Create AI Videos in minutes. Our AI creation tool creates viral AI
            videos for you.
          </p>
          <div className="mt-10">
            <Link href="#get-started">
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

      {/* AI Capabilities */}
      <section className="mt-32 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Create unique videos for every niche
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              From script writing to video generation, Clipy can create any
              style of video in seconds.
            </p>
          </div>

          {/* Video Style Grid */}

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
              {/* Voice 1 */}
              <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-[#F2C94C] mb-3 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Adam
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Male, Professional
                </p>
              </div>
              {/* Voice 2 */}
              <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-[#F2C94C] mb-3 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Sarah
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Female, Friendly
                </p>
              </div>
              {/* Voice 3 */}
              <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-[#F2C94C] mb-3 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Michael
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Male, Energetic
                </p>
              </div>
              {/* Voice 4 */}
              <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-[#F2C94C] mb-3 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Emma
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Female, Natural
                </p>
              </div>
              {/* Voice 5 */}
              <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-[#F2C94C] mb-3 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  David
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Male, Dramatic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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
            <FeatureCard
              icon={<Wand2 className="size-5" />}
              title="Text-to-video magic"
              description="Describe your clip and let our AI generate scenes, subtitles, and cuts."
            />
            <FeatureCard
              icon={<GaugeCircle className="size-5" />}
              title="Fast and scalable"
              description="Export in seconds with cloud rendering optimized for speed."
            />
            <FeatureCard
              icon={<Layers className="size-5" />}
              title="On-brand templates"
              description="Apply fonts, colors, and layouts to stay consistent across platforms."
            />
            <FeatureCard
              icon={<PlayCircle className="size-5" />}
              title="Smart captions"
              description="Auto-captions with highlights, emojis, and progress bars built-in."
            />
            <FeatureCard
              icon={<Zap className="size-5" />}
              title="Auto reframing"
              description="One click to adapt for TikTok, Reels, Shorts, and YouTube."
            />
            <FeatureCard
              icon={<Sparkles className="size-5" />}
              title="Stock + voiceover"
              description="Generate voiceovers and add stock footage without leaving Clipy."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
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
              <StepCard number="1" title="Write your script">
                Use our AI-powered script generator or paste your own script.
                Add background music and choose a voice.
              </StepCard>
              <StepCard number="2" title="Generate your video">
                Our AI creates scenes, captions, cuts, and animations
                automatically. Preview and adjust as needed.
              </StepCard>
              <StepCard number="3" title="Share everywhere">
                Export in multiple formats and share directly to TikTok, YouTube
                Shorts, and Instagram Reels.
              </StepCard>
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

      {/* Pricing */}
      <section id="pricing" className="mt-20 sm:mt-24">
        <div id="get-started" className="sr-only" />
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-gray-900 dark:text-white">
            Pricing
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Start free, upgrade when you need more power.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 text-left">
            <PricingCard
              name="Starter"
              price="$0"
              cta="Start for free"
              features={[
                "10 renders / month",
                "Auto captions",
                "Basic templates",
              ]}
            />
            <PricingCard
              name="Pro"
              price="$29/mo"
              cta="Upgrade to Pro"
              featured
              features={[
                "Unlimited renders",
                "Brand templates",
                "1080p exports",
                "Priority rendering",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-300 dark:border-gray-700 py-8 text-sm text-gray-600 dark:text-gray-400">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#F2C94C] text-black">
              <Video className="h-4 w-4" />
            </div>
            <span className="text-gray-900 dark:text-white font-semibold">
              Clipy AI
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-foreground transition-colors"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </div>
          <div>© {new Date().getFullYear()} Clipy, Inc.</div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
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

function StepCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-900/70 transition-all duration-200 shadow-sm hover:shadow-md">
      <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F2C94C] text-black text-xs font-semibold shadow-sm">
        {number}
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

function PricingCard({
  name,
  price,
  cta,
  features,
  featured,
}: {
  name: string;
  price: string;
  cta: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-900/70 transition-all duration-200 shadow-sm hover:shadow-md ${
        featured
          ? "ring-2 ring-yellow-500/20 bg-gradient-to-br from-[#F2C94C]/10 to-[#F2C94C]/5 dark:from-[#F2C94C]/20 dark:to-[#F2C94C]/10"
          : ""
      }`}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="text-2xl font-semibold">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 text-[#F2C94C]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button
          className={`w-full ${
            featured
              ? "bg-[#F2C94C] text-black hover:bg-[#F2C94C]/80 border border-[#F2C94C] shadow-lg"
              : ""
          }`}
          variant={featured ? "default" : "outline"}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}

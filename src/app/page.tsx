import Link from "next/link";
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10 blur-3xl [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
          <div className="mx-auto h-64 w-[40rem] bg-gradient-to-tr from-yellow-500/20 via-yellow-400/15 to-yellow-300/10 rounded-full" />
        </div>
        <div className="absolute inset-0 -z-10 opacity-8 blur-3xl [mask-image:radial-gradient(40%_40%_at_80%_80%,black,transparent)]">
          <div className="mx-auto h-96 w-[30rem] bg-gradient-to-bl from-yellow-400/15 via-yellow-500/10 to-yellow-600/5 rounded-full" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
                     <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-3 py-1 text-xs text-gray-700 dark:text-gray-300 mb-4 bg-white/80 dark:bg-black/50 backdrop-blur-sm">
             <Sparkles className="size-3" />
             <span>AI video generator for creators and teams</span>
           </div>
           <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
             Create viral videos from text in seconds
           </h1>
           <p className="mt-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg">
             Clipy turns your ideas into high-quality, captioned, brand-ready
             clips for social media. No timeline editing. Just type, generate,
             share.
           </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="#get-started">
                             <Button
                 size="lg"
                 className="h-11 px-6 bg-yellow-500 text-black hover:bg-yellow-400 border border-yellow-500 shadow-lg"
               >
                 Get started free
               </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="h-11 px-6">
                See how it works
              </Button>
            </Link>
          </div>
                     <div className="mt-6 text-xs text-gray-600 dark:text-gray-400">
             No credit card required • Free forever plan available
           </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section id="how-it-works" className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-gray-900 dark:text-white">
            How it works
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Go from idea to export in three simple steps.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
            <StepCard number="1" title="Describe">
              Paste a script or describe the video you want to make.
            </StepCard>
            <StepCard number="2" title="Generate">
              Clipy creates scenes, captions, cuts, and animations for you.
            </StepCard>
            <StepCard number="3" title="Publish">
              Export in any format and share directly to your channels.
            </StepCard>
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
            <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-yellow-500 text-black">
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
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-yellow-500/20 text-yellow-600 dark:text-yellow-400">
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
      <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500 text-black text-xs font-semibold shadow-sm">
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
          ? "ring-2 ring-yellow-500/20 bg-gradient-to-br from-yellow-50/50 to-yellow-100/30 dark:from-yellow-900/30 dark:to-yellow-800/20"
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
            <Check className="mt-0.5 size-4 text-yellow-600 dark:text-yellow-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button
          className={`w-full ${
                      featured
            ? "bg-yellow-500 text-black hover:bg-yellow-400 border border-yellow-500 shadow-lg"
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

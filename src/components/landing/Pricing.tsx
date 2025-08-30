import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Pricing() {
  return (
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
  );
}

interface PricingCardProps {
  name: string;
  price: string;
  cta: string;
  features: string[];
  featured?: boolean;
}

function PricingCard({
  name,
  price,
  cta,
  features,
  featured,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white/80 dark:bg-gray-900/50 hover:bg-white/90 dark:hover:bg-gray-900/70 transition-all duration-200 shadow-sm hover:shadow-md ${
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
          asChild
        >
          <Link href="/register">{cta}</Link>
        </Button>
      </div>
    </div>
  );
}

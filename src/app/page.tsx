import {
  Hero,
  AICapabilities,
  Features,
  HowItWorks,
  Pricing,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="py-10 sm:py-16">
      <Hero />
      <AICapabilities />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}

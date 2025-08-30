import { Header } from "@/components/Header";
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
    <div>
      <Header />
      <div className="px-24 py-10 sm:py-16">
        <Hero />
        <AICapabilities />
        <Features />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

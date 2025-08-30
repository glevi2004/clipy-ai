"use client";

import Link from "next/link";
import { Video } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 dark:supports-[backdrop-filter]:bg-black/90">
      <div
        className={`container mx-auto flex h-14 items-center justify-between transition-all duration-300 ease-in-out ${
          scrolled ? "px-8 rounded-full mx-4" : "px-4"
        }`}
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#F2C94C] text-black shadow-lg">
              <Video className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900 dark:text-white">
              Clipy AI
            </span>
          </Link>
        </div>

        <nav
          className={`hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-muted-foreground transition-all duration-300`}
        >
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
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Link
            href="/register"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-10 px-4 bg-[#F2C94C] text-black hover:bg-[#F2C94C]/80 border border-[#F2C94C] shadow-lg"
          >
            Start for free
          </Link>
        </div>
      </div>
    </header>
  );
}

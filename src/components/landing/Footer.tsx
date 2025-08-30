import Link from "next/link";
import { Video } from "lucide-react";

export function Footer() {
  return (
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
  );
}

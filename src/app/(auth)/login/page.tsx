"use client";

import Link from "next/link";
import { Video, Eye, EyeOff, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginWithEmail(formData.email, formData.password);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#F2C94C] text-black shadow-lg">
                <Video className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-tight text-gray-900 dark:text-white">
                Clipy AI
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sign in to your account
            </h1>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F2C94C] focus:border-[#F2C94C]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F2C94C] focus:border-[#F2C94C]"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#F2C94C] text-black hover:bg-[#F2C94C]/80 border border-[#F2C94C] shadow-lg"
            >
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-black text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={async () => {
                await loginWithGoogle();
                router.push("/dashboard");
              }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-[#F2C94C] hover:text-[#F2C94C]/80"
                >
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section - Promotional Content */}
      <div className="hidden lg:flex flex-1 bg-[#1a1d21] items-center justify-center px-8 relative">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />

        <div className="relative z-10 max-w-md text-center text-white">
          {/* Testimonials */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-600 border-2 border-[#1a1d21] flex items-center justify-center text-xs font-semibold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="flex items-center ml-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-[#F2C94C] fill-current" />
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-300 mb-8">
            Trusted by 27,000+ creators
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Create faster with Clipy AI
          </h2>

          <p className="text-lg text-gray-300">
            Craft, edit and share viral videos without the hassle.
          </p>
        </div>
      </div>
    </div>
  );
}

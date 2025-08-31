"use client";

import { CreditCard, Calendar, Check } from "lucide-react";

export default function BillingSettingsPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Billing & Subscription
        </h1>

        <div className="space-y-8">
          {/* Current Plan */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Current Plan
            </h2>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Free Plan
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Basic video generation with limited features
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    $0
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    per month
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    5 videos per month
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Basic video types
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    720p resolution
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Payment Method
            </h2>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <CreditCard className="h-5 w-5 mr-3" />
                <span>No payment method on file</span>
              </div>
              <button className="mt-4 bg-[#F2C94C] hover:bg-[#F2C94C]/80 text-black px-4 py-2 rounded-md font-medium">
                Add Payment Method
              </button>
            </div>
          </div>

          {/* Billing History */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Billing History
            </h2>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-center py-8 text-gray-600 dark:text-gray-400">
                <Calendar className="h-5 w-5 mr-2" />
                <span>No billing history available</span>
              </div>
            </div>
          </div>

          {/* Upgrade Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Upgrade Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pro Plan */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Pro Plan
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for content creators
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    $19
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    per month
                  </p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      50 videos per month
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      All video types
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      1080p resolution
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Priority support
                    </span>
                  </div>
                </div>
                <button className="w-full bg-[#5200FF] hover:bg-[#5200FF]/80 text-white px-4 py-2 rounded-md font-medium">
                  Upgrade to Pro
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Enterprise
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    For teams and businesses
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    $99
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    per month
                  </p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Unlimited videos
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      All features
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      4K resolution
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Team collaboration
                    </span>
                  </div>
                </div>
                <button className="w-full border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-md font-medium">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

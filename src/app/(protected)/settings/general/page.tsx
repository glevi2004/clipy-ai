"use client";

export default function GeneralSettingsPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          General Settings
        </h1>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm focus:ring-[#F2C94C] focus:border-[#F2C94C] bg-gray-50 dark:bg-[#15171a] text-gray-900 dark:text-white"
                  placeholder="Enter your display name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm focus:ring-[#F2C94C] focus:border-[#F2C94C] bg-gray-50 dark:bg-[#15171a] text-gray-900 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Preferences
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifications"
                  className="h-4 w-4 text-[#F2C94C] focus:ring-[#F2C94C] border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] rounded"
                />
                <label
                  htmlFor="notifications"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  Email notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="marketing"
                  className="h-4 w-4 text-[#F2C94C] focus:ring-[#F2C94C] border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15171a] rounded"
                />
                <label
                  htmlFor="marketing"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  Marketing communications
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button className="bg-[#F2C94C] hover:bg-[#F2C94C]/80 text-black px-4 py-2 rounded-md font-medium">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

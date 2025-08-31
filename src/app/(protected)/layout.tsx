"use client";

import { useEffect } from "react";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/protected/DashboardHeader";
import { AppSidebar } from "@/components/protected/Sidebar";
import { LoadingPage } from "@/components/ui/loading";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!user) return null;

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-[#111111]">
        <AppSidebar />
        <main className="w-full flex flex-col align-items-center justify-center bg-[#111111] min-h-screen">
          <DashboardHeader />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

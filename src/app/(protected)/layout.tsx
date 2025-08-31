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
      <AppSidebar />
      <main>
        <DashboardHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}

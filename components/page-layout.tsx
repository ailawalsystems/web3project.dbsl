"use client"

import type { ReactNode } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar activeTab="overview" setActiveTab={() => {}} />
        <main className="flex-1 p-6 pt-20">{children}</main>
      </div>
    </div>
  )
}

"use client"

import type { ReactNode } from "react"
import { Breadcrumb } from "@/components/breadcrumb"

interface PageLayoutWithBreadcrumbsProps {
  children: ReactNode
}

export function PageLayoutWithBreadcrumbs({ children }: PageLayoutWithBreadcrumbsProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <Breadcrumb />
      {children}
    </div>
  )
}

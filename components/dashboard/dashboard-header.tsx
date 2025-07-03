"use client"

import Link from "next/link"
import { Shield } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="fixed top-0 inset-x-0 h-14 flex items-center justify-between px-6 bg-gray-950/90 backdrop-blur z-40 border-b border-gray-800">
      <Link href="/" className="flex items-center space-x-2">
        <Shield className="h-6 w-6 text-emerald-400" />
        <span className="font-semibold text-white">Web3 Sentinel</span>
      </Link>

      <nav className="text-sm space-x-6 text-gray-400">
        <Link href="/dashboard" className="hover:text-white">
          Overview
        </Link>
        <Link href="/agents" className="hover:text-white">
          Agents
        </Link>
        <Link href="/explore" className="hover:text-white">
          Explore
        </Link>
      </nav>
    </header>
  )
}

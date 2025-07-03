"use client"

import Link from "next/link"
import { Shield, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold text-white">Web3 Sentinel</span>
            </div>
            <p className="text-gray-400">
              AI-powered multi-agent system for blockchain security and DeFi exploit detection.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-white transition-colors">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-white transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/create" className="hover:text-white transition-colors">
                  Create
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/resources/docs" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Web3 Sentinel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

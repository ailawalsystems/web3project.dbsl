"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  const breadcrumbItems = [
    { label: "Home", href: "/", icon: Home },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
      return { label, href }
    }),
  ]

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          {index === 0 ? (
            <Link href={item.href} className="flex items-center hover:text-white transition-colors">
              <item.icon className="h-4 w-4 mr-1" />
              {item.label}
            </Link>
          ) : index === breadcrumbItems.length - 1 ? (
            <span className="text-white font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

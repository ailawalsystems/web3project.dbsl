"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MessageCircle, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TemikaFAB() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Initial attention-grabbing pulse animation
  useEffect(() => {
    let resetTimer: NodeJS.Timeout

    // Initial pulse after 2 seconds
    const initialTimer = setTimeout(() => {
      setIsPulsing(true)

      resetTimer = setTimeout(() => {
        setIsPulsing(false)
      }, 1500)
    }, 2000)

    // Repeat pulse every 30 seconds
    const intervalTimer = setInterval(() => {
      setIsPulsing(true)

      setTimeout(() => {
        setIsPulsing(false)
      }, 1500)
    }, 30000)

    // Cleanup function
    return () => {
      clearTimeout(initialTimer)
      clearTimeout(resetTimer)
      clearInterval(intervalTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <Button asChild size="lg" className="rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg h-14 w-14 p-0">
          <Link href="/temika">
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Open Temika AI Assistant</span>
          </Link>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="absolute -top-2 -right-2 rounded-full bg-gray-800 hover:bg-gray-700 h-6 w-6 p-0"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Hide assistant</span>
        </Button>
      </div>
    </div>
  )
}

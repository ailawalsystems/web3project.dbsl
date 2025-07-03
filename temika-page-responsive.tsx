"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function TemikaPageResponsive() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm Temika, your AI assistant for Web3 security. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I understand you're asking about Web3 security. Let me help you with that. This is a simulated response - in the full implementation, I would connect to Google AI Studio API for intelligent responses.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-emerald-500/20 border border-emerald-500/30">
              <Bot className="h-12 w-12 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Temika AI Assistant
          </h1>
          <p className="text-gray-400">Your intelligent companion for Web3 security analysis</p>
        </div>

        <Card className="bg-gray-900 border-gray-800 h-96 mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-emerald-400" />
              Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full overflow-y-auto">
            <div className="space-y-4 pb-20">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "user" ? "bg-emerald-600 text-white" : "bg-gray-800 text-gray-100"
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {message.sender === "user" ? (
                        <User className="h-4 w-4 mr-1" />
                      ) : (
                        <Bot className="h-4 w-4 mr-1 text-emerald-400" />
                      )}
                      <span className="text-xs opacity-75">{message.sender === "user" ? "You" : "Temika"}</span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-gray-100 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                    <div className="flex items-center">
                      <Bot className="h-4 w-4 mr-1 text-emerald-400" />
                      <span className="text-xs opacity-75">Temika</span>
                    </div>
                    <div className="flex space-x-1 mt-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about Web3 security..."
            className="flex-1 bg-gray-800 border-gray-700"
            disabled={isLoading}
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading || !inputMessage.trim()}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Analyze Smart Contract
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Check for Vulnerabilities
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Security Best Practices
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Recent Threats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-xs text-gray-400">
                <div>Flash loan attack detected</div>
                <div>Reentrancy vulnerability found</div>
                <div>Suspicious transaction pattern</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Agents Active</span>
                  <span className="text-emerald-400">8/8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monitoring</span>
                  <span className="text-emerald-400">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Scan</span>
                  <span className="text-gray-400">2 min ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

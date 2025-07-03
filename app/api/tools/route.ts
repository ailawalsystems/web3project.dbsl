import type { NextRequest } from "next/server"

interface SecurityTool {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  githubUrl: string
  isCustom: boolean
  rating: number
  downloads: number
}

const mockTools: SecurityTool[] = [
  {
    id: "1",
    name: "Slither",
    description: "Static analyzer for Solidity smart contracts",
    category: "analyzer",
    tags: ["solidity", "static-analysis", "security"],
    githubUrl: "https://github.com/crytic/slither",
    isCustom: false,
    rating: 4.8,
    downloads: 15420,
  },
  {
    id: "2",
    name: "MythX",
    description: "Security analysis platform for Ethereum smart contracts",
    category: "analyzer",
    tags: ["ethereum", "smart-contracts", "security"],
    githubUrl: "https://github.com/ConsenSys/mythx-cli",
    isCustom: false,
    rating: 4.6,
    downloads: 8930,
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const isCustom = searchParams.get("custom")

    let filteredTools = mockTools

    if (category) {
      filteredTools = filteredTools.filter((tool) => tool.category === category)
    }

    if (isCustom !== null) {
      filteredTools = filteredTools.filter((tool) => tool.isCustom === (isCustom === "true"))
    }

    return Response.json({
      success: true,
      data: filteredTools,
      total: filteredTools.length,
    })
  } catch (error) {
    return Response.json({ success: false, error: "Failed to fetch tools" }, { status: 500 })
  }
}

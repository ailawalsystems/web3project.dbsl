import type { NextRequest } from "next/server"
import type { SecurityThreat } from "@/lib/agents/agent-types"

const mockThreats: SecurityThreat[] = [
  {
    id: "1",
    title: "Reentrancy Vulnerability in DeFi Protocol",
    severity: "critical",
    category: "Smart Contract",
    source: "Security Blog",
    date: "2024-01-15",
    status: "new",
    description: "Critical reentrancy vulnerability discovered in popular DeFi protocol",
  },
  {
    id: "2",
    title: "Flash Loan Attack Vector Identified",
    severity: "high",
    category: "DeFi",
    source: "Twitter",
    date: "2024-01-14",
    status: "analyzing",
    description: "New flash loan attack vector affecting multiple protocols",
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const severity = searchParams.get("severity")
    const category = searchParams.get("category")

    let filteredThreats = mockThreats

    if (severity) {
      filteredThreats = filteredThreats.filter((threat) => threat.severity === severity)
    }

    if (category) {
      filteredThreats = filteredThreats.filter((threat) => threat.category === category)
    }

    return Response.json({
      success: true,
      data: filteredThreats,
      total: filteredThreats.length,
    })
  } catch (error) {
    return Response.json({ success: false, error: "Failed to fetch threats" }, { status: 500 })
  }
}

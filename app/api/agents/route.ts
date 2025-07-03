import { NextResponse, type NextRequest } from "next/server"
import { agents, getAgent, runAgent } from "@/lib/agents"
import type { AgentTask, AgentType } from "@/lib/agents"
import { crypto } from "crypto"

export async function GET() {
  try {
    const agentList = Object.entries(agents).map(([key, value]) => ({
      id: key,
      name: value,
      status: "active",
      lastRun: new Date().toISOString(),
    }))

    return NextResponse.json({
      success: true,
      data: agentList,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch agents" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { agentId, task } = body

    if (!agentId || !task) {
      return NextResponse.json({ success: false, error: "Missing required fields: agentId and task" }, { status: 400 })
    }

    // Validate agent type
    try {
      getAgent(agentId as AgentType)
    } catch (error) {
      return NextResponse.json({ success: false, error: `Invalid agent type: ${agentId}` }, { status: 400 })
    }

    // Create a new task
    const newTask: AgentTask = {
      id: crypto.randomUUID(),
      agentId: agentId,
      title: task.title || "Unnamed Task",
      description: task.description || "",
      status: "pending",
      createdAt: new Date(),
    }

    // Run the agent with the task
    const result = await runAgent(agentId as AgentType, newTask)

    return NextResponse.json({ success: true, task: result })
  } catch (error) {
    console.error("Error running agent:", error)
    return NextResponse.json({ success: false, error: "Failed to submit task" }, { status: 500 })
  }
}

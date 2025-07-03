import type { AgentTask } from "./agent-types"
import { createStubAgent, completeTaskImmediately } from "./_stub-utils"

export const architectAgent = createStubAgent("architect", "Solution Architect Agent", "Designs mitigation strategies")

export async function runArchitectAgent(task: AgentTask) {
  return completeTaskImmediately(task)
}

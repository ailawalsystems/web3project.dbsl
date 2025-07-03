import type { AgentTask } from "./agent-types"
import { createStubAgent, completeTaskImmediately } from "./_stub-utils"

export const researcherAgent = createStubAgent(
  "researcher",
  "Researcher Agent",
  "Curates blockchain-security knowledge",
)

export async function runResearcherAgent(task: AgentTask) {
  return completeTaskImmediately(task)
}

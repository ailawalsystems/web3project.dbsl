import type { AgentTask } from "./agent-types"
import { createStubAgent, completeTaskImmediately } from "./_stub-utils"

export const toolsmithAgent = createStubAgent("toolsmith", "Toolsmith Agent", "Discovers & evaluates security tooling")

export async function runToolsmithAgent(task: AgentTask) {
  return completeTaskImmediately(task)
}

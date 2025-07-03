import type { AgentTask } from "./agent-types"
import { createStubAgent, completeTaskImmediately } from "./_stub-utils"

export const coderAgent = createStubAgent("coder", "Coder Agent", "Implements security tools & patches")

export async function runCoderAgent(task: AgentTask) {
  return completeTaskImmediately(task)
}

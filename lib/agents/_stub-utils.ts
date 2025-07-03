import type { Agent, AgentTask, AgentType } from "./agent-types"

/** Creates a minimal stub Agent object */
export function createStubAgent(type: AgentType, name: string, description?: string): Agent {
  return { type, name, description }
}

/** Completes the task immediately.  Real logic will replace this. */
export async function completeTaskImmediately(task: AgentTask): Promise<AgentTask> {
  return { ...task, status: "completed", output: null }
}

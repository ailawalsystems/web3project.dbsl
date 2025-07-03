import type { AgentTask } from "./agent-types"
import { createStubAgent, completeTaskImmediately } from "./_stub-utils"

export const llmAgent = createStubAgent("llm", "LLM Agent", "Provides language-model powered capabilities")

export async function runLlmAgent(task: AgentTask) {
  return completeTaskImmediately(task)
}

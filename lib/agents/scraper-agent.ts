import type { AgentTask } from "./agent-types"
import { createStubAgent, completeTaskImmediately } from "./_stub-utils"

export const scraperAgent = createStubAgent("scraper", "Scraper Agent", "Collects external data sources")

export async function runScraperAgent(task: AgentTask) {
  return completeTaskImmediately(task)
}

import { llmAgent, runLlmAgent } from "./llm-agent"
import { scraperAgent, runScraperAgent } from "./scraper-agent"
import { analyzerAgent, runAnalyzerAgent } from "./analyzer-agent"
import { researcherAgent, runResearcherAgent } from "./researcher-agent"
import { architectAgent, runArchitectAgent } from "./architect-agent"
import { toolsmithAgent, runToolsmithAgent } from "./toolsmith-agent"
import { coderAgent, runCoderAgent } from "./coder-agent"
import { githubAgent, runGithubAgent } from "./github-agent"

import type { Agent, AgentTask, AgentType } from "./agent-types"

/* ------------------------------------------------------------------ */
/*  Aggregated maps for convenience                                   */
/* ------------------------------------------------------------------ */

export const agents: Record<AgentType, Agent> = {
  llm: llmAgent,
  scraper: scraperAgent,
  analyzer: analyzerAgent,
  researcher: researcherAgent,
  architect: architectAgent,
  toolsmith: toolsmithAgent,
  coder: coderAgent,
  github: githubAgent,
}

export const agentRunners: Record<AgentType, (task: AgentTask) => Promise<AgentTask>> = {
  llm: runLlmAgent,
  scraper: runScraperAgent,
  analyzer: runAnalyzerAgent,
  researcher: runResearcherAgent,
  architect: runArchitectAgent,
  toolsmith: runToolsmithAgent,
  coder: runCoderAgent,
  github: runGithubAgent,
}

/* ------------------------------------------------------------------ */
/*  Public helpers                                                    */
/* ------------------------------------------------------------------ */

/** Returns the static metadata for the requested agent */
export function getAgent(agentType: AgentType): Agent {
  const agent = agents[agentType]
  if (!agent) {
    throw new Error(`No agent found for type "${agentType}"`)
  }
  return agent
}

/**
 * Executes a task with the requested agent.
 * NOTE: this stub instantly completes; real logic belongs in each agent runner.
 */
export async function runAgent(agentType: AgentType, task: AgentTask): Promise<AgentTask> {
  const runner = agentRunners[agentType]
  if (!runner) {
    throw new Error(`No runner found for agent type "${agentType}"`)
  }
  return runner(task)
}

/* Re-export foundational types */
export * from "./agent-types"

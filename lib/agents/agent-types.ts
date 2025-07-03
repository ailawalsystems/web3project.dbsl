export type AgentType = "llm" | "scraper" | "analyzer" | "researcher" | "architect" | "toolsmith" | "coder" | "github"

export interface Agent {
  /** unique short key (matches AgentType) */
  type: AgentType
  /** Human-readable name */
  name: string
  /** Optional description for UI/ docs */
  description?: string
}

export interface AgentTask<Input = unknown, Output = unknown> {
  id: string
  agent: AgentType
  input: Input
  output?: Output
  status: "pending" | "running" | "completed" | "error"
  error?: string
}

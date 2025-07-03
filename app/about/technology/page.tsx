import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Github, Search, FileSearch, PenToolIcon as Tool, Zap } from "lucide-react"

export default function TechnologyPage() {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "bg-blue-900/20 text-blue-400 border-blue-800",
    },
    {
      category: "Backend",
      items: ["Node.js", "Supabase", "PostgreSQL", "Redis", "WebSockets"],
      color: "bg-green-900/20 text-green-400 border-green-800",
    },
    {
      category: "AI/ML",
      items: ["Google AI Studio", "Groq", "CrewAI", "LangChain", "TensorFlow"],
      color: "bg-purple-900/20 text-purple-400 border-purple-800",
    },
    {
      category: "Blockchain",
      items: ["Ethereum", "Solana", "Polygon", "Web3.js", "Ethers.js"],
      color: "bg-orange-900/20 text-orange-400 border-orange-800",
    },
    {
      category: "Security Tools",
      items: ["Slither", "Mythril", "Echidna", "MythX", "Manticore"],
      color: "bg-red-900/20 text-red-400 border-red-800",
    },
    {
      category: "Infrastructure",
      items: ["Vercel", "GitHub Actions", "Docker", "Kubernetes", "Monitoring"],
      color: "bg-gray-900/20 text-gray-400 border-gray-800",
    },
  ]

  const agents = [
    {
      name: "LLM Assistant",
      description: "Provides security consultation and manages other agents",
      icon: <Brain className="h-5 w-5 text-purple-400" />,
    },
    {
      name: "Scraper Agent",
      description: "Extracts security threats from various online sources",
      icon: <Search className="h-5 w-5 text-blue-400" />,
    },
    {
      name: "Analyzer Agent",
      description: "Performs in-depth analysis of exploits and vulnerabilities",
      icon: <FileSearch className="h-5 w-5 text-yellow-400" />,
    },
    {
      name: "Researcher Agent",
      description: "Organizes blockchain security knowledge and research",
      icon: <Database className="h-5 w-5 text-green-400" />,
    },
    {
      name: "Solution Architect",
      description: "Suggests mitigation strategies for security issues",
      icon: <Zap className="h-5 w-5 text-orange-400" />,
    },
    {
      name: "Toolsmith Agent",
      description: "Identifies and evaluates open-source security tools",
      icon: <Tool className="h-5 w-5 text-red-400" />,
    },
    {
      name: "Coder Agent",
      description: "Develops and implements security tools and fixes",
      icon: <Code className="h-5 w-5 text-indigo-400" />,
    },
    {
      name: "GitHub Manager",
      description: "Manages repository and publishes findings online",
      icon: <Github className="h-5 w-5 text-gray-400" />,
    },
  ]

  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Technology Stack</h1>
        <p className="text-gray-400 mb-8">
          Web3 Sentinel is built using cutting-edge technologies to ensure maximum security, performance, and
          scalability in protecting the Web3 ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg">{tech.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="outline" className={tech.color}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-900 border-gray-800 mt-8">
          <CardHeader>
            <CardTitle>Architecture Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Our multi-agent architecture leverages distributed AI systems to provide comprehensive security coverage.
              The system consists of specialized agents for scraping, analysis, research, solution architecture, tool
              development, and GitHub management, all coordinated through a central orchestration layer. Real-time data
              processing and machine learning models enable proactive threat detection and automated response
              capabilities.
            </CardDescription>
          </CardContent>
        </Card>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8 mt-8">
          <h3 className="text-xl font-semibold mb-4 text-emerald-400">Agent System Architecture</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {agents.map((agent) => (
              <div key={agent.name} className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center mr-3">
                  {agent.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{agent.name}</h4>
                  <p className="text-sm text-gray-400">{agent.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400">
            Our agents communicate through a central orchestration layer, sharing information and insights to create a
            comprehensive understanding of the security landscape. This architecture allows us to rapidly adapt to new
            threats and continuously improve our security capabilities.
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-800 mt-8">
          <CardHeader>
            <CardTitle>Security & Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Security is at the core of everything we do. Our platform is built with security best practices in mind,
              and we maintain strict data protection and privacy standards.
            </CardDescription>
            <ul className="space-y-4 mt-4">
              <li className="flex">
                <span className="text-emerald-500 mr-2">•</span>
                <span>
                  <strong>API Key Management:</strong> Secure handling of API keys for Groq, Supabase, and other
                  services
                </span>
              </li>
              <li className="flex">
                <span className="text-emerald-500 mr-2">•</span>
                <span>
                  <strong>OAuth Authentication:</strong> Secure user access through Auth0
                </span>
              </li>
              <li className="flex">
                <span className="text-emerald-500 mr-2">•</span>
                <span>
                  <strong>Data Encryption:</strong> All sensitive data is encrypted at rest and in transit
                </span>
              </li>
              <li className="flex">
                <span className="text-emerald-500 mr-2">•</span>
                <span>
                  <strong>Regular Security Audits:</strong> Our own platform undergoes regular security assessments
                </span>
              </li>
              <li className="flex">
                <span className="text-emerald-500 mr-2">•</span>
                <span>
                  <strong>Responsible Disclosure:</strong> We follow industry best practices for vulnerability
                  disclosure
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 p-6 rounded-lg border border-emerald-800/50 mt-8">
          <CardHeader>
            <CardTitle>Open Source Commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              We believe in the power of open source to advance security. Many components of our platform are open
              source, allowing the community to review, contribute to, and build upon our work.
            </CardDescription>
            <a
              href="https://github.com/your-username/web3-security-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors mt-4"
            >
              Explore our GitHub repository →
            </a>
          </CardContent>
        </Card>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}

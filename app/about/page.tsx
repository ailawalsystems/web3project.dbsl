import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Zap, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Web3 Sentinel</h1>
            <p className="text-xl text-gray-400">
              AI-Powered DeFi Exploit Hunter protecting the future of decentralized finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <Shield className="h-8 w-8 text-emerald-400 mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To protect the Web3 ecosystem through advanced AI-powered security monitoring, threat detection, and
                  automated response systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-400 mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A secure and trustworthy decentralized financial ecosystem where users can participate with
                  confidence, protected by intelligent security systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle>Multi-Agent System</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our coordinated AI agents work together to analyze threats, research vulnerabilities, and provide
                  comprehensive security solutions for the blockchain ecosystem.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-400 mb-2" />
                <CardTitle>Real-time Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Continuous monitoring and instant threat detection across multiple blockchain networks and DeFi
                  protocols, providing 24/7 security coverage.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-400 mb-8">
              Built with cutting-edge technologies for maximum security and performance
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <div className="font-semibold text-emerald-400">Frontend</div>
                <div className="text-gray-400">React, Next.js, Tailwind CSS</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <div className="font-semibold text-blue-400">Backend</div>
                <div className="text-gray-400">Supabase, Node.js</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <div className="font-semibold text-purple-400">AI/ML</div>
                <div className="text-gray-400">Google AI, Groq, CrewAI</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <div className="font-semibold text-yellow-400">Web3</div>
                <div className="text-gray-400">Ethereum, Solana, Polygon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}

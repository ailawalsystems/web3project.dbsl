import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MissionPage() {
  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Our Mission</h1>

        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle>Protecting the Web3 Ecosystem</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Web3 Sentinel is dedicated to safeguarding the decentralized finance ecosystem through advanced artificial
              intelligence and multi-agent security systems. Our mission is to provide comprehensive, real-time
              protection against exploits, vulnerabilities, and malicious activities that threaten the integrity of
              blockchain networks and DeFi protocols.
            </CardDescription>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-400">
                <li>• Security First</li>
                <li>• Transparency</li>
                <li>• Innovation</li>
                <li>• Community Protection</li>
                <li>• Continuous Learning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Key Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-400">
                <li>• Prevent DeFi exploits</li>
                <li>• Detect vulnerabilities early</li>
                <li>• Educate the community</li>
                <li>• Advance security research</li>
                <li>• Build trust in Web3</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}

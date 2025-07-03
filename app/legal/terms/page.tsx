import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: January 2024</p>

        <div className="space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                By accessing and using Web3 Sentinel, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>2. Use License</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Permission is granted to temporarily download one copy of Web3 Sentinel per device for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>3. Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                The materials on Web3 Sentinel are provided on an 'as is' basis. Web3 Sentinel makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>4. Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                In no event shall Web3 Sentinel or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use Web3 Sentinel, even if Web3 Sentinel or a Web3 Sentinel authorized representative
                has been notified orally or in writing of the possibility of such damage.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>5. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                If you have any questions about these Terms of Service, please contact us at legal@web3sentinel.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}

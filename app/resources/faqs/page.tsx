import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"

export default function FAQsPage() {
  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">FAQs</h1>
        <p className="text-gray-400 mt-2">Frequently asked questions about our platform</p>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}

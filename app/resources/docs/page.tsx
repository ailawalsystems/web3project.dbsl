import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"

export default function DocsPage() {
  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-gray-400 mt-2">Comprehensive guides and documentation</p>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}

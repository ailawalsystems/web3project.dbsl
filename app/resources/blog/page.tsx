import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"

export default function BlogPage() {
  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-gray-400 mt-2">Latest articles and updates on blockchain security</p>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}

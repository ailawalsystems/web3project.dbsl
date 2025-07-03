import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"

export default function CustomToolsPage() {
  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Custom Tools</h1>
        <p className="text-gray-400 mt-2">Manage your custom security tools</p>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}
